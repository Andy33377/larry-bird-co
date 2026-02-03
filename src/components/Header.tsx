export default function Header() {
  return (
    <header className="px-[var(--padding-content-x)] h-header bg-header">
      <div className="mx-auto max-w-[1440px] px-4 h-full flex items-center justify-between">
        {/* logo */}
        <div className="flex w-[143px] h-[35px] items-center gap-2">
          <img src="/Star-logo.svg" alt="Bird logo" className="w-6 h-6" />
          <span className="font-semibold text-logo text-accent">Bird & Co</span>
        </div>

        {/* navigation */}
        <nav className="font-medium flex items-center gap-8">
          <a href="#">Репродукции</a>
          <a href="#">Новинки</a>
          <a href="#">О нас</a>

          {/* Cart */}
          <button className="ml-4">
            <img src="/Cart-logo.svg" alt="Cart" className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
