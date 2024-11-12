"use client";

import { usePathname } from "next/navigation";
import { fetchProduct } from "../../../lib/queries";
import PortableTextComponent from "../../components/PortableText";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdWhatsapp } from "react-icons/md";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import arrow icons

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [slug, setSlug] = useState("");
  const pathname = usePathname();

  // This effect runs only on the client-side
  useEffect(() => {
    if (pathname) {
      const slugFromPath = pathname.split("/").pop();
      setSlug(slugFromPath);
    }
  }, [pathname]);

  // Fetch product data whenever `slug` changes
  useEffect(() => {
    const fetchProductData = async () => {
      if (slug) {
        const fetchedProduct = await fetchProduct(slug);
        setProduct(fetchedProduct);
      }
    };
    fetchProductData();
  }, [slug]);

  console.log(product);
  if (!product) return <p>Loading...</p>;

  const images = product.images.map((image) => image.asset.url);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="p-4 tracking-wide max-lg:max-w-2xl mx-auto mb-40">
      <ul className="flex items-center justify-center space-x-5 my-4">
        <li className="text-gray-800 bg-gray-100 px-4 py-2 rounded rounded-tr-none rounded-br-none text-sm cursor-pointer flex items-center relative before:absolute before:bg-gray-100 before:h-[25px] before:w-[25px] before:right-[-12px] before:rotate-[45deg] before:z-[-1]">
          Home
        </li>
        <li className="text-white bg-blue-500 px-4 py-2 rounded rounded-tr-none rounded-br-none text-sm font-semibold cursor-pointer flex items-center relative before:absolute before:bg-blue-500 before:h-[25px] before:w-[25px] before:right-[-12px] before:rotate-[45deg] before:z-[-1]">
          Edit
        </li>
      </ul>
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4 text-center lg:sticky top-8">
          <div className="lg:col-span-3 text-center relative">
            <div className="lg:h-[450px] relative before:absolute before:inset-0 before:rounded">
              <img
                src={images[currentImageIndex]}
                alt="Product"
                className=" w-full h-full rounded object-contain object-top"
              />
              <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
              >
                <FiChevronLeft size={40} className="text-black" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
              >
                <FiChevronRight size={40} className="text-black" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mx-auto mt-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded ${
                    index === currentImageIndex
                      ? "border-2 border-yellow-400"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product${index + 1}`}
                    className="w-20 h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {product.name}
            </h2>
          </div>

          <div className="mt-4">
            <h4 className="text-3xl text-gray-800 font-bold mt-6">
              DA {product.discountedprice}
              <strike className="text-red-400 ml-2 font-medium">
                DA {product.price}
              </strike>
            </h4>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Choose a Size</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                className="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
              >
                SM
              </button>
              <button
                type="button"
                className="w-10 h-10 border hover:border-yellow-400 border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
              >
                MD
              </button>
              <button
                type="button"
                className="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
              >
                LG
              </button>
              <button
                type="button"
                className="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
              >
                XL
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Link
              href="https://m.me/61556503836307"
              target="_blank"
              type="button"
              className="flex flex-row items-center justify-center gap-2 min-w-[200px] px-4 py-3 bg-[#0084ff] text-white hover:bg-black outline-1 outline-[#0084ff] text-sm font-semibold rounded-lg transition ease-in-out duration-300"
            >
              Buy from messenger
              <FaFacebookMessenger size={25} />
            </Link>
            <Link
              href="https://wa.me/+213553185497"
              target="_blank"
              type="button"
              className="flex flex-row items-center justify-center gap-2 min-w-[200px] px-4 py-3 bg-[#25d366] hover:bg-black text-white text-sm font-semibold rounded-lg transition ease-in-out duration-300"
            >
              Buy from whatsapp
              <MdWhatsapp size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/direct/t/17845926813158532"
              target="_blank"
              type="button"
              className="flex flex-row items-center justify-center gap-2 min-w-[200px] px-4 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 hover:bg-black text-white text-sm font-semibold rounded-lg transition ease-in-out duration-300"
            >
              Buy from Instagram
              <FaInstagram size={25} />
            </Link>
          </div>

          <div className="mt-8">
            <ul className="flex border-b">
              <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-yellow-400 cursor-pointer transition-all">
                Description
              </li>
            </ul>

            <div className="mt-8">
              <PortableTextComponent value={product.description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
