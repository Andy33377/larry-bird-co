import { useState } from "react";
import ProductCart from "../UI/ProductCart";
import rawProducts from "../mocks/products.json";
import type { Product } from "../UI/ProductCart";

const products = rawProducts as Product[];

export default function OurProducts() {
  const categories = ["Франция", "Германия", "Англия"] as const;
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number]
  >(categories[0]);

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory,
  );

  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-[var(--padding-content-x)] py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[40px] leading-[100%] font-medium text-[#2C2D35]">
            Репродукции
          </h2>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-accent text-white px-5 py-2  rounded-3xl font-medium"
                    : "bg-header border-2 border-header  text-black px-5 py-2 rounded-3xl font-medium"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
