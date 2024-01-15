import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="bg-lightBlue">
      <Navbar />
      <div className="max-w-contentContainer mx-auto bg-white">
        <Banner />
        <Products />
      </div>
      <Footer />
    </main>
  );
}
