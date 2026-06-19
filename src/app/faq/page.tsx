import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FaqAccordion } from "@/components/faq-accordion";
import { ScrollReveal } from "@/components/scroll-reveal";

const allFaqs = [
  {
    question: "Studio nằm ở đâu?",
    answer:
      "Monkey Tattoo hoạt động theo hình thức hẹn trước để đảm bảo không gian riêng tư và thoải mái cho mỗi khách hàng.",
  },
  {
    question: "Làm sao để đặt lịch?",
    answer:
      "Điền form liên hệ với ý tưởng thiết kế, nghệ sĩ bạn muốn, và thời gian rảnh. Chúng tôi sẽ phản hồi trong vòng 48 giờ để sắp xếp buổi tư vấn miễn phí.",
  },
  {
    question: "Có cần đặt cọc không?",
    answer:
      "Có, cần đặt cọc để giữ lịch hẹn. Số tiền cọc sẽ được trừ vào chi phí buổi xăm chính thức.",
  },
  {
    question: "Cần chuẩn bị gì trước buổi xăm?",
    answer:
      "Ngủ đủ giấc, ăn no trước khi đến, uống đủ nước, và mặc quần áo thoải mái giúp dễ tiếp cận vùng da cần xăm.",
  },
  {
    question: "Có nhận xăm cover-up không?",
    answer:
      "Có, nhiều nghệ sĩ của chúng tôi chuyên về cover-up. Gửi kèm ảnh hình xăm cũ trong form đặt lịch để chúng tôi tư vấn phương án tốt nhất.",
  },
  {
    question: "Chuyên về những style nào?",
    answer:
      "Đội ngũ chuyên về black & grey realism, Japanese traditional (Irezumi), fine line, và thiết kế custom. Xem trang từng nghệ sĩ để biết thế mạnh cụ thể.",
  },
  {
    question: "Chi phí xăm hình là bao nhiêu?",
    answer:
      "Giá phụ thuộc vào kích thước, độ phức tạp, vị trí, và thời gian. Chúng tôi báo giá chi tiết sau buổi tư vấn miễn phí. Có mức phí tối thiểu cho mỗi buổi.",
  },
  {
    question: "Có nhận khách vãng lai không?",
    answer:
      "Không, chúng tôi chỉ nhận khách đặt lịch trước. Điều này đảm bảo mỗi khách hàng nhận được sự chú ý trọn vẹn.",
  },
  {
    question: "Chăm sóc sau xăm như thế nào?",
    answer:
      "Chúng tôi cung cấp hướng dẫn chăm sóc chi tiết sau mỗi buổi. Cơ bản: giữ sạch, dưỡng ẩm, tránh ánh nắng trực tiếp, không ngâm nước 2-3 tuần.",
  },
  {
    question: "Có thể mang ảnh tham khảo không?",
    answer:
      "Hoàn toàn được. Ảnh tham khảo giúp nghệ sĩ hiểu rõ hơn ý tưởng của bạn. Đính kèm trong form hoặc mang đến buổi tư vấn.",
  },
  {
    question: "Yêu cầu độ tuổi tối thiểu?",
    answer:
      "Bạn phải từ 18 tuổi trở lên và có giấy tờ tùy thân hợp lệ. Không ngoại lệ.",
  },
  {
    question: "Mỗi buổi xăm kéo dài bao lâu?",
    answer:
      "Thường từ 2-6 tiếng tùy tác phẩm. Các dự án lớn có thể cần nhiều buổi, cách nhau 4-6 tuần để da hồi phục.",
  },
  {
    question: "Có dịch vụ touch-up không?",
    answer:
      "Có, miễn phí touch-up 1 lần trong 3 tháng sau buổi xăm. Sau đó tính theo giờ.",
  },
  {
    question: "Thanh toán bằng hình thức nào?",
    answer:
      "Nhận tiền mặt, thẻ ngân hàng, và chuyển khoản. Thanh toán sau mỗi buổi xăm.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <section className="py-32 px-6">
          <div className="max-w-[800px] mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.85] mb-4">
                Câu Hỏi <span className="text-accent">Thường Gặp</span>
              </h1>
              <p className="text-text-secondary text-lg mb-16">
                Mọi thứ bạn cần biết trước khi đặt lịch.
              </p>
            </ScrollReveal>
            <FaqAccordion items={allFaqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
