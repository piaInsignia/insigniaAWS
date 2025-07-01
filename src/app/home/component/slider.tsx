// "use client";
// import { useState } from "react";

// // const slides = [
// //   {
// //     title: "Task Craft",
// //     description: "Our advanced model streamlines integration...",
// //     image: "/logo1.png",
// //   },
// //   {
// //     title: "Another Feature",
// //     description: "Second slide description here.",
// //     image: "/logo2.png",
// //   },
// // ];
// type Slide = {
//   title: string;
//   description: string;
//   image: string;
// };
// type SimpleSliderProps = {
//   data: Slide[];
// };

// export default function SimpleSlider(
//   { data }: SimpleSliderProps,
//   children: any
// ) {
//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((current + 1) % data.length);
//   const prev = () => setCurrent((current - 1 + data.length) % data.length);

//   return (
//     <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow text-center">
//       {children[current]}
//       <img src={data[current].image} alt="" className="mx-auto mb-4" />
//       <h2 className="text-xl font-bold mb-2">{data[current].title}</h2>
//       <p className="text-gray-600 mb-4">{data[current].description}</p>

//       <div className="flex justify-center gap-2 mb-4">
//         {data.map((_, idx) => (
//           <span
//             key={idx}
//             className={`h-2 w-2 rounded-full ${
//               idx === current ? "bg-[#292A71]" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="flex justify-center gap-4">
//         <button
//           onClick={prev}
//           className="px-4 py-2 rounded-full bg-gray-300 text-white"
//         >
//           ←
//         </button>
//         <button
//           onClick={next}
//           className="px-4 py-2 rounded-full bg-[#292A71] text-white"
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, ReactNode } from "react";

type SimpleSliderProps<T> = {
  data: T[];
  renderSlide: (item: T) => ReactNode;
};

export default function SimpleSlider<T>({
  data,
  renderSlide,
}: SimpleSliderProps<T>) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % data.length);
  const prev = () => setCurrent((current - 1 + data.length) % data.length);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow text-center">
      {renderSlide(data[current])}

      <div className="flex justify-center gap-2 mb-4">
        {data.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === current ? "bg-[#292A71]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-full bg-gray-300 text-white"
        >
          ←
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded-full bg-[#292A71] text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
