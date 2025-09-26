import { useState } from "react"
import "./Lottery.css"
import { genTicket , sum } from "./lotteryUtils";
import Ticket from "./Ticket";

function Lottery({n = 3 , winCondition}) {
    let [ticket , setTicket] = useState(genTicket(n));  // call function to generate random number
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
  return (
    <div className="Lottery">
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && 'Congrats, You Win! '}</h3>
    </div>
  )
}

export default Lottery;