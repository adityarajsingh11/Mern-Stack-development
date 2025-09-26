// import "./Product.css"
// import Price from "./Price";

// function Product({title , idx}){
//     let oldPrices = ["12,495","11,900","1,599","599"]
//     let newPrices = ["8,999","9,199","899","278"]
//     let description = [
//         ["8,000 DPI","5 Programmable buttons "],
//         ["intuitive surface", "designed for iPad Pro"],
//         ["designed for iPad Pro","intuitive surface"], 
//         ["wireless", "optical orientation"]];
//     return(
//         <div className="Product">
//             <h4>{title}</h4>
//             <p>{description[idx][0]}</p>
//             <p>{description[idx][1]}</p>
//             <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        
//         </div>
//     )
// }

// export default Product;




import "./Product.css"
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"]
  ];
  
  let images = [
    "https://m.media-amazon.com/images/I/61ni3t1ryQL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/51IorThdSZL._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61aniK-DlsL.jpg",
    "https://www.portronics.com/cdn/shop/products/1200x1200-1_2a441adb-a618-4990-b2e5-cb90756004a0.jpg?v=1680776122"
  ];

  return (
    <div className="Product">
      <img src={images[idx]} alt={title} className="ProductImage" />
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
