import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <section
      id="reproduction"
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-picture.jpg')" }}
    >
      <div className="inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
        <div className="mx-auto max-w-[1440px] px-[var(--padding-content-x)] py-16">
          <div className="max-w-[560px] text-white">
            <div className="flex    items-center mb-4">
              <img
                src="/Star2.svg
            "
                alt="star-logo"
                className="w-[80px] h-[80px]"
              />
              <h2 className="ml-[20px] w-[421px] leading-[120%] text-4xl">
                Новая коллекция
                <br />
                французских авторов
              </h2>
            </div>

            <p className="text-base leading-relaxed mb-4">
              Сложно сказать, почему акционеры крупнейших компаний призывают нас
              к новым свершениям, которые, в свою очередь, должны быть
              заблокированы…
            </p>

            <p className="text-base leading-relaxed mb-8">
              Принимая во внимание показатели успешности, граница обучения
              кадров предопределяет высокую востребованность…
            </p>

            <Link
              to="/new-products"
              className="w-[257px] h-[65px] bg-[#EEDB6D] border border-black/20 font-medium text-black flex items-center justify-center transition-colors hover:bg-[#e5d062]"
            >
              Ознакомиться
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
