import {useState} from "react";

const FlashCard = ({answer, question}) => {

    const [isClicked, setIsClicked] = useState(false)
    
    const flipCard = () => {
        setIsClicked(!isClicked)
    }

    return ( 
        <div onClick={flipCard} className=" justify-center bg-white w-52 text-center h-24 flex items-center shadow-xl rounded-lg">
        {isClicked ? <h2 className="text-xl">{answer}</h2> : <h2 className="text-xl">{question}</h2>}
      </div>
     );
}
 
export default FlashCard;