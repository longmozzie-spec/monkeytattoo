import Link from "next/link";
import Image from "next/image";
import { TiktokLogo, FacebookLogo, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="relative h-10 w-36">
              <Image
                src="/images/logo/logo-white.png"
                alt="Monkey Tattoo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-[35ch]">
              Nghệ thuật xăm hình chuyên nghiệp. Chỉ nhận khách đặt lịch trước.
              Tư vấn miễn phí.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider mb-4">
              Trang
            </p>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-text-secondary hover:text-accent transition-colors">Trang Chủ</Link>
              <Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">Giới Thiệu</Link>
              <Link href="/artists" className="text-sm text-text-secondary hover:text-accent transition-colors">Nghệ Sĩ</Link>
              <Link href="/gallery" className="text-sm text-text-secondary hover:text-accent transition-colors">Tác Phẩm</Link>
              <Link href="/faq" className="text-sm text-text-secondary hover:text-accent transition-colors">FAQ</Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Đặt Lịch</Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider mb-4">
              Kết Nối
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@monkeytattoocantho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <TiktokLogo size={24} weight="bold" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100054644370739"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <FacebookLogo size={24} weight="bold" />
              </a>
              <a
                href="mailto:quyenct2907@gmail.com"
                aria-label="Email"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <EnvelopeSimple size={24} weight="bold" />
              </a>
              <a
                href="tel:0907573205"
                aria-label="Phone"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Phone size={24} weight="bold" />
              </a>
            </div>
            <p className="mt-4 text-text-secondary text-sm">
              Email: quyenct2907@gmail.com
            </p>
            <p className="mt-1 text-text-secondary text-sm">
              SĐT: 0907 573 205
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Monkey Tattoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
