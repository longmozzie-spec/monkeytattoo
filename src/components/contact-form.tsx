"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-display text-3xl font-extrabold uppercase">
          Cảm Ơn Bạn
        </h3>
        <p className="mt-4 text-text-secondary text-lg">
          Chúng tôi sẽ liên hệ trong vòng 48 giờ để sắp xếp buổi tư vấn.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">
            Họ và Tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors"
            placeholder="Tên của bạn"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wider">
          Số Điện Thoại
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors"
          placeholder="0901 234 567"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="artist" className="text-sm font-semibold uppercase tracking-wider">
          Nghệ Sĩ Mong Muốn
        </label>
        <select
          id="artist"
          name="artist"
          className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
        >
          <option value="">Không có yêu cầu cụ thể</option>
          <option value="chiwon-an">Chiwon An</option>
          <option value="lindsey-pergentile">Lindsey Pergentile</option>
          <option value="hyunjoo-cho">Hyunjoo Cho</option>
          <option value="sunyul-irezumi">Sunyul Irezumi</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-semibold uppercase tracking-wider">
          Mô Tả Hình Xăm
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Mô tả ý tưởng hình xăm, kích thước, vị trí, và ảnh tham khảo (nếu có)."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="placement" className="text-sm font-semibold uppercase tracking-wider">
          Vị Trí Xăm
        </label>
        <input
          id="placement"
          name="placement"
          type="text"
          className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors"
          placeholder="VD: Cẳng tay trong, lưng trên"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-foreground py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent/85 transition-colors duration-300 active:scale-[0.99]"
      >
        Gửi Yêu Cầu
      </button>

      <p className="text-xs text-text-secondary text-center">
        Tư vấn miễn phí. Cần đặt cọc để giữ lịch hẹn.
      </p>
    </form>
  );
}
