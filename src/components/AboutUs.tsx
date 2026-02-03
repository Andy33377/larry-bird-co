export default function AboutUs() {
  return (
    <div className="mx-auto max-w-[1440px] px-[var(--padding-content-x)] py-12 ">
      <div className="flex items-center justify-between gap-12">
        <img
          src="/Bird-picture.svg"
          alt="Иллюстрация птицы"
          className="w-[621px] h-[540px]"
        />
        <div className="flex w-[540px] h-[331px] flex-col gap-4">
          <h2 className="text-3xl   font-medium text-[#2c2c2c]">
            Реплики картин
            <br />
            от <span className="text-accent font-semibold">Bird & Co</span>
          </h2>
          <p className="text-base text-[#666666]">
            Высокое качество отрисовки на плотной бумаге или льняном холсте.
            Редкие произведения, доступные цены.
          </p>
          <button className="w-[227px] h-[65px] mt-20 border border-accent text-accent font-medium px-6 py-3 bg-transparent hover:bg-accent hover:text-white transition-colors  ">
            Продукция
          </button>
        </div>
      </div>
    </div>
  );
}
