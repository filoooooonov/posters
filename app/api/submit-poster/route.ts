import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const eventName = formData.get("eventName") as string;
    const posterImage = formData.get("posterImage") as File;

    console.log("Event Name:", eventName);
    console.log("Poster Image:", posterImage?.name);

    // Validate inputs
    if (!eventName) {
      return NextResponse.json(
        { error: "Event name is required" },
        { status: 400 }
      );
    }

    if (!posterImage || posterImage.size === 0) {
      return NextResponse.json(
        { error: "Poster image is required" },
        { status: 400 }
      );
    }

    // Check if email is configured
    const emailConfigured =
      process.env.SMTP_FROM_EMAIL &&
      process.env.SMTP_PASSWORD &&
      process.env.SMTP_USER &&
      process.env.SMTP_FROM_EMAIL.trim() !== "" &&
      process.env.SMTP_PASSWORD.trim() !== "";

    if (!emailConfigured) {
      console.warn("Email not configured. Submission logged but not sent.");
      console.log(
        `Poster submission received: ${eventName} - ${posterImage.name}`
      );
      return NextResponse.json({
        message: "Poster submission received (email not configured)",
      });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_FROM_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Convert file to buffer for email attachment
    const bytes = await posterImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const mailOptions: Mail.Options = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_FROM_EMAIL,
      subject: `New poster submission for ${eventName}`,
      text: `A new poster has been submitted for event: ${eventName}`,
      attachments: [
        {
          filename: posterImage.name,
          content: buffer,
        },
      ],
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error in submit-poster API:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to submit poster" },
      { status: 500 }
    );
  }
}
