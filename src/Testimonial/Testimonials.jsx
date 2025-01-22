// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css"; 
// import "swiper/css/navigation";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       author: "Mitchell Marsh",
//       title: "CEO, Bexon Agency",
//     },
//     {
//       text: "Another great testimonial here.",
//       author: "John Doe",
//       title: "Founder, Example Co.",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Swiper
//         navigation={true}
//         modules={[Navigation]}
//         spaceBetween={50}
//         slidesPerView={1}
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="text-center">
//               <h2 className="text-3xl font-bold mb-2">Our Clients Feedback</h2>
//               <p className="text-lg text-gray-600 mb-4">
//                 The food at your doorstep. Why starve when you have us? You hunger partner.
//               </p>
//               <div className="text-orange-500 text-6xl mb-4">“</div>
//               <p className="text-lg italic text-gray-800 mb-6">
//                 {testimonial.text}
//               </p>
//               <div>
//                 <h3 className="text-xl font-bold">{testimonial.author}</h3>
//                 <p className="text-gray-600">{testimonial.title}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
