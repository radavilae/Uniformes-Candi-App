// import { useState, useEffect } from "react";
// import "./Carousel.css";

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [foto1, foto2, foto3, foto4, foto5];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="carousel-container">
//       <img
//         src={images[currentImageIndex]}
//         alt={`Slide ${currentImageIndex + 1}`}
//         className="carousel-image"
//       />
//       <div className="carousel-dots">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === currentImageIndex ? "active" : ""}`}
//             onClick={() => setCurrentImageIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
