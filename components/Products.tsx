import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";

interface Types {
  _id: number;
  title: string;
  des: string;
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
      {products.map((product: Types) => (
        <div
          className="bordder-b-[1px] border-gray-200 mb-6 group"
          key={product._id}
        >
          <div className="w-full h-[350px] overflow-hidden p-1">
            <Image
              className="w-full h-full object-contain scale-100 hover:scale-105 duration-300"
              src={product.image}
              alt={product.title}
              width={300}
              height={250}
            />
          </div>
          {/* Description Start */}
          <div className="px-2 py-4 flex justify-center flex-col">
            <div className="flex justify-between py-2">
              <button className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 justify-center items-center hover:bg-[#004f9a] duration-300">
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <Link
                href={{
                  pathname: `product/${product._id}`,
                  query: {
                    _id: product._id,
                    title: product.title,
                    des: product.des,
                    price: product.price,
                    oldPrice: product.oldPrice,
                    brand: product.brand,
                    category: product.category,
                    image: product.image,
                    isNew: product.isNew,
                  },
                }}
              >
                <button className="w-24 h-9 bg-white border-[1px] border-black text-black rounded-full flex justify-center items-center gap-1 hover:bg-black hover:text-white duration-300">
                  <span>
                    <GoPlus />
                  </span>
                  Details
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-lg text-green-700 font-semibold">
                Now ${product.price}{" "}
              </p>
              <p className="text-gray-500 line-through decoration-[1px]">
                ${product.oldPrice}{" "}
              </p>
            </div>
            <p className="text-lg font-semibold py-2">
              {product.title.substring(0, 25)}{" "}
            </p>
            <p className="text-base text-zinc-500">
              {product.des.substring(0, 80)}...
            </p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex text-sm gap-1">
                <BsStarFill color="#ffc20f" />
                <BsStarFill color="#ffc20f" />
                <BsStarFill color="#ffc20f" />
                <BsStarFill color="#ffc20f" />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
