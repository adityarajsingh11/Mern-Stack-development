import "./Product.css"

function Product({title ,price = 1 , features }){
    let isDiscount = price >= 30000;
    let styles = {backgroundColor : isDiscount ? "pink" : ""}
    return(
        <div className="Product" style={styles}>
        <h1>Product Title : {title}</h1>
        <h4>Price : {price}</h4>
        <p> Product Description</p>
        {isDiscount && <p>Discount of 5%</p>}
        </div>
    )
}

export default Product;