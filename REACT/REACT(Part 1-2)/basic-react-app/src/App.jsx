import './App.css'
import Title from "./Title.jsx"
import ProductTab from "./ProductTab.jsx"
import MsgBox from './MsgBox.jsx'


function App() {
   return (
    <>
        <MsgBox userName="Aditya"textColor="green" />
        <MsgBox userName="Developer Dilip"textColor="orange" />
        <Title/>
        <h1> This is the App</h1>
        <ProductTab/>
        
    </>
  )
}

export default App
