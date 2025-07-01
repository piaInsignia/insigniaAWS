// "use client";

// import { useState } from "react";
// import { ChevronDown, Import } from "lucide-react";
// import Image from "next/image";
// import { images } from "@/lib/image";
// import Link from "next/link";

// export default function Header() {
//   const [langOpen, setLangOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-[5px] z-50">
//       a
//       <div className="hidden sm:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Image
//             src={images.LOGO}
//             alt="Insignia Logo"
//             width={100}
//             height={100}
//           />
//         </div>
//         {/* Navigation */}
//         <nav className="flex items-center space-x-6 text-sm text-[#2c296d] font-medium">
//           {/* Dropdowns */}
//           <div className="relative group">
//             <button className="flex items-center gap-1">
//               Our Services <ChevronDown size={14} />
//             </button>
//             {/* Dropdown items (optional) */}
//             {/* <div className="absolute hidden group-hover:block">...</div> */}
//           </div>

//           <div className="relative group">
//             <button className="flex items-center gap-1">
//               Insights <ChevronDown size={14} />
//             </button>
//           </div>

//           {/* Normal Links */}
//           <Link href="#">AWS Partner</Link>
//           <Link href="#">About Us</Link>
//           <Link href="#">Career</Link>

//           {/* Language Selector */}
//           <div className="relative">
//             <button
//               className="flex items-center gap-1"
//               onClick={() => setLangOpen(!langOpen)}
//             >
//               <Image
//                 src={images.EN_FLAG}
//                 alt="UK Flag"
//                 width={18}
//                 height={18}
//               />
//               ENG <ChevronDown size={14} />
//             </button>
//             {/* You can add dropdown lang list here */}
//           </div>

//           {/* Divider */}
//           <div className="w-px h-5 bg-gray-300 mx-2" />

//           {/* CTA Button */}
//           <button className="bg-[#2c296d] text-white rounded-full px-4 py-2 text-sm font-medium">
//             Get In Touch
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/image"; // Ganti sesuai path gambarmu

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // 640px = Tailwind sm
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-[5px]">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={images.LOGO}
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm text-[#2c296d] font-medium">
          <DropdownButton label="Our Services" />
          <DropdownButton label="Insights" />
          <Link href="#">AWS Partner</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Career</Link>
          <LangSelector />
          <div className="w-px h-5 bg-gray-300 mx-2" />
          <CTAButton />
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="sm:hidden text-[#2c296d]"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Overlay and Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen
            ? "bg-black/50 opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={images.LOGO} alt="Logo" width={80} height={80} priority />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-[#2c296d]"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 p-6 text-[#2c296d] font-medium bg-white shadow-lg">
          <DropdownButton label="Our Services" />
          <DropdownButton label="Insights" />
          <Link href="#">AWS Partner</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Career</Link>
          <LangSelector />
          <CTAButton className="mt-4" />
        </nav>
      </div>
    </header>
  );
}

function DropdownButton({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1">
      {label} <ChevronDown size={14} />
    </button>
  );
}

function LangSelector() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:ml-5 lg:ml-10 xl:ml-15">
      <button
        className="flex items-center gap-1"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={images.EN_FLAG}
          alt="Flag"
          width={18}
          height={18}
          priority
        />
        ENG <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute mt-2 bg-white shadow rounded p-2 text-sm">
          <button className="block w-full text-left">ENG</button>
          <button className="block w-full text-left">IDN</button>
        </div>
      )}
    </div>
  );
}

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <button
      className={`bg-[#2c296d] text-white rounded-full px-4 py-2 text-sm font-medium ${className}`}
    >
      Get In Touch
    </button>
  );
}
