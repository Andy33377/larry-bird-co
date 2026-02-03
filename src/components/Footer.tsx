export default function Footer() {
  return (
    <footer className="bg-[#E0EFE8]">
      <div className="mx-auto max-w-[1440px] px-[var(--padding-content-x)] py-16">
        <div className="flex justify-between gap-12 flex-wrap">
          {/* Колонка 1: Лого + контакты */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/Star-logo.svg" alt="" className="w-8 h-8" />
              <span className="font-semibold text-logo text-accent">
                Bird & Co
              </span>
            </div>
            <a
              href="tel:+79995435454"
              className="font-semibold text-[#2C2D35] text-lg"
            >
              +7 (999) 543-54-54
            </a>
            <p className="text-sm text-[#505050]">Мастерская</p>
          </div>

          {/* Колонка 2: Репродукции */}
          <div>
            <h4 className="font-semibold text-[#2C2D35] mb-4">Репродукции</h4>
            <ul className="flex flex-col gap-2 text-[#505050] text-sm">
              <li>
                <a href="#">Франция</a>
              </li>
              <li>
                <a href="#">Германия</a>
              </li>
              <li>
                <a href="#">Англия</a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Новинки */}
          <div>
            <h4 className="font-semibold text-[#2C2D35] mb-4">Новинки</h4>
            <ul className="flex flex-col gap-2 text-[#505050] text-sm">
              <li>
                <a href="#">2026</a>
              </li>
              <li>
                <a href="#">2025</a>
              </li>
            </ul>
          </div>

          {/* Колонка 4: О нас */}
          <div>
            <h4 className="font-semibold text-[#2C2D35] mb-4">О нас</h4>
            <ul className="flex flex-col gap-2 text-[#505050] text-sm">
              <li>
                <a href="#">Художники</a>
              </li>
              <li>
                <a href="#">Менеджеры</a>
              </li>
            </ul>
          </div>

          {/* Колонка 5: Соцсети + копирайт */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-2">
              <a
                href="#"
                className="w-10 h-10   flex items-center justify-center rounded"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10   flex items-center justify-center rounded"
              >
                <img
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  className="w-5 h-5"
                />
              </a>
            </div>
            <div className="text-right">
              <p className="font-medium text-[#2C2D35]">Bird & Co</p>
              <p className="text-sm text-[#505050]">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
