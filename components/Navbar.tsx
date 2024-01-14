import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FcServices } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full bg-blue text-white">
      <div className="max-w-container mx-auto h-20 px-4 flex justify-between items-center gap-2">
        {/* -------------------------------------------------------------------- */}
        {/* ======================= Logo Start here ============================ */}
        <div className="navBarHover">
          <Image src={logo} alt="logo" className="w-44" />
        </div>
        {/* ======================= Logo End here ============================== */}
        {/* ======================= Departments Start here ===================== */}
        <div className="navBarHover">
          <HiOutlineSquares2X2 />
          <p className="text-base font-semibold">Departmenets</p>
        </div>
        {/* ======================= Departments End here ======================= */}
        {/* ======================= Services Start here ======================== */}
        <div className="navBarHover">
          <FcServices />
          <p className="text-base font-semibold">Services</p>
        </div>
        {/* ======================= Services End here ========================== */}
        {/* ======================= SearchBox Start here ===================== */}
        <div className="h-10 flex flex-1 relative">
          <input
            className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
            placeholder="Search everything at Shoppers online store"
            type="text"
          />
          <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-blacktext-xl">
            <FaSearch color="black" />
          </span>
        </div>
        {/* ======================= SearchBox End here ========================= */}
        {/* ======================= MyItems Start here ===================== */}
        <div className="navBarHover">
          <FaRegHeart />
          <div>
            <p className="text-xs">Recorder</p>
            <h2 className="text-base font-semibold -mt-1">My Items</h2>
          </div>
        </div>
        {/* ======================= MyItems End here =========================== */}
        {/* ======================= Accounts Start here ===================== */}
        <div className="navBarHover">
          <HiOutlineUser size={30} />
          <div>
            <p className="text-xs">Sign In</p>
            <h2 className="text-base font-semibold -mt-1">Account</h2>
          </div>
        </div>
        {/* ======================= Accounts End here ========================== */}
        {/* ======================= Cart Start here ========================== */}
        <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative">
          <BsCart4 size={30} />
          <p className="text-[10px] -mt-2">$ 0.00</p>
          <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex justify-center items-center text-xs">
            0
          </span>
        </div>
        {/* ======================= Cart End here ========================== */}
      </div>
    </div>
  );
};

export default Navbar;
