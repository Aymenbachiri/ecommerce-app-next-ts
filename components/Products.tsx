import Image from "next/image";

interface Items {
  id: number;
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  brand: string;
  category: string;
}

async function getProducts() {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/walmart");

  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {products.map((product: Items) => (
        <div
          className="bordder-b-[1px] border-gray-200 mb-6 group"
          key={product.id}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={250}
          />
        </div>
      ))}
    </div>
  );
}
