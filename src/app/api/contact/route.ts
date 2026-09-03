import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL ?? "devshah120902@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const business = String(data.business ?? "").trim();
  const service = String(data.service ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Business", business || "—"],
    ["Service required", service || "—"],
  ];

  const html = `
    <div style="font-family: sans-serif; font-size: 14px; color: #0b1220;">
      <h2 style="margin: 0 0 16px;">New consultation enquiry</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#64748b;vertical-align:top;">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin: 16px 0 4px; color: #64748b;">Message</p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Business: ${business || "—"}`,
    `Service required: ${service || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Yash Shah GST Consultant <support@yasshshah.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Consultation enquiry — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
