// import React, { useState, useEffect } from "react";
// import foto1 from "../assets/foto1.jpg";
// import foto2 from "../assets/foto2.jpg";
// import foto3 from "../assets/foto3.jpg";
// import foto4 from "../assets/foto4.jpg";
// import foto5 from "../assets/foto5.jpg";
// import c40anos from "../assets/40candi.jpeg";

// const allImages = [foto1, foto2, foto3, foto4, foto5];

// const getRandomImage = (exclude) => {
//   const filtered = allImages.filter((img) => img !== exclude);
//   return filtered[Math.floor(Math.random() * filtered.length)];
// };

// const mainImageStyle = {
//   width: "420px",
//   height: "500px",
//   objectFit: "cover",
//   borderRadius: "32px",
// };

// const logoStyle = {
//   display: "block",
//   margin: "0 auto 80px auto",
//   width: "340px",
//   height: "340px",
//   borderRadius: "50%",
//   objectFit: "cover",
//   boxShadow: "0 6px 28px rgba(0,0,0,0.28)",
//   border: "8px solid #fff",
//   background: "#fff",
// };

// const Mosaico = () => {
//   const [img1, setImg1] = useState(foto1);
//   const [img2, setImg2] = useState(foto2);
//   const [img3, setImg3] = useState(foto3);

//   useEffect(() => {
//     const interval1 = setInterval(() => {
//       setImg1((prev) => getRandomImage(prev));
//     }, 2500);
//     const interval2 = setInterval(() => {
//       setImg2((prev) => getRandomImage(prev));
//     }, 3700);
//     const interval3 = setInterval(() => {
//       setImg3((prev) => getRandomImage(prev));
//     }, 4800);
//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//       clearInterval(interval3);
//     };
//   }, []);

//   return (
//     <div style={{ margin: "40px 0" }}>
//       <img src={c40anos} alt="40 años" style={logoStyle} />
//       <div style={{ display: "flex", gap: "32px", justifyContent: "center", alignItems: "center" }}>
//         <img src={img1} alt="Mosaico 1" style={mainImageStyle} />
//         <img src={img2} alt="Mosaico 2" style={mainImageStyle} />
//         <img src={img3} alt="Mosaico 3" style={mainImageStyle} />
//       </div>
//     </div>
//   );
// };

// export default Mosaico; 