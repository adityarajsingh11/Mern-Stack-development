function printHello(event){
    console.log("Hello!")
    console.log(event)
}

function printBye(){
    console.log("bye!")
}

function hoverdemo(){
    console.log("hover!")
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>This parah is for event demo</p>

            <p onMouseOver={hoverdemo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, pariatur dolorum quos eius odio eos esse fugiat incidunt, ad maxime sequi laudantium quasi numquam quisquam tenetur? Autem libero eveniet vel voluptas vitae architecto corporis, voluptates quidem obcaecati non labore eos est adipisci totam unde! Natus enim incidunt dolorum. Molestias, accusamus!</p>
        </div>
    )
}