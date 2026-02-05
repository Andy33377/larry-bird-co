import PromoBanner from "../UI/PromoBanner";

export default function OurTeam() {
  return (
    <div className=" ">
      <PromoBanner />

      <section id="ourteam" className=" py-16">
        <div className="mx-auto max-w-[1440px] px-[var(--padding-content-x)]">
          {/* Верхний блок: картинка + текст */}
          <div className="flex gap-12 items-center mb-16">
            <img
              src="/Arm-logo.svg"
              alt="Рука с кистями в рамке"
              className="w-[400px] h-auto object-cover"
            />

            <div className="flex-1">
              <h3 className="text-[32px] font-medium text-[#2C2D35] mb-4">
                Наша команда
              </h3>
              <p className="text-base text-[#555] leading-relaxed">
                Значимость этих проблем настолько очевидна, что базовый вектор
                развития позволяет оценить значение экспериментов, поражающих по
                своей масштабности…
              </p>
              <div className="flex items-center mt-[20px] gap-6">
                <img
                  src="/staff/anna-staff.jpg"
                  alt="Сотрудник 1"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src="/staff/erny-staff.jpg"
                  alt="Сотрудник 2"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src="/staff/max-staff.jpg"
                  alt="Сотрудник 3"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
