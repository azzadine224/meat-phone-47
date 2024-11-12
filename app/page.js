import Image from "next/image";
import Hero from "./Sections/Hero"
import Values from "./Sections/Values"
import ProductsList from "./Sections/ProductsList";

export default function Home() {
  return (
    <>
    <Hero/>
    <Values/>
    <ProductsList/>
    </>
  );
}
