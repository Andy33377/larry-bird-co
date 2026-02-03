export interface Product {
  id: string;
  image: string;
  artist: string;
  title: string;
  medium: string;
  price: number;
  category: string;
}

export default function ProductCart({ product }: { product: Product }) {
  return (
    <article className="w-[350px] h-[730px] bg-[#E1EDE6] px-6 pt-6 pb-8 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[430px] object-cover mb-6"
      />

      <p className="text-sm text-[#86928B] mb-1">{product.artist}</p>

      <h3 className="font-medium text-[30px] w-[310px] h-[35px] leading-[100%] text-[#2C2D35] mb-1">
        {product.title}
      </h3>

      <p className="text-sm text-[#86928B] mb-4">{product.medium}</p>

      <p className="text-lg font-semibold text-accent mb-6">
        {product.price.toLocaleString("ru-RU")} руб
      </p>

      <button className="mt-auto w-full h-[60px] border border-accent text-accent text-base font-medium hover:bg-accent hover:text-white transition-colors">
        В корзину
      </button>
    </article>
  );
}
