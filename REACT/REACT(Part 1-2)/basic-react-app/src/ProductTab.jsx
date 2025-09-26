import Product from "./Product"

function ProductTab(){
    //let options  = [<li>"hi-tech"</li>, <li>"durable"</li>,<li>"fast"</li>]
    let options = ["hi-tech", "durable", "Smart" ]
    return(
        <>
        <Product title="Phone" price={10000} />
        <Product  title="TV" price={30000}/>
        <Product  title="Laptop" price={60000}/>
        <Product  title="Watch" price={1000}/>
        </>
    )
}

export default ProductTab;