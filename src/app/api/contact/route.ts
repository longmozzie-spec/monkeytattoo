import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, artist, description, placement } = await req.json();

  const { error } = await resend.emails.send({
    from: "MonKey Tattoo <onboarding@resend.dev>",
    to: "quyenct2907@gmail.com",
    subject: `Đặt lịch mới từ ${name}`,
    html: `
      <h2>Yêu cầu đặt lịch mới</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td><strong>Họ tên</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Điện thoại</strong></td><td>${phone || "—"}</td></tr>
        <tr><td><strong>Nghệ sĩ</strong></td><td>${artist || "Không có yêu cầu"}</td></tr>
        <tr><td><strong>Vị trí xăm</strong></td><td>${placement || "—"}</td></tr>
        <tr><td><strong>Mô tả</strong></td><td>${description}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
