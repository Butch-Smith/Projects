import animals from "../animals.js"
import {useNavigate} from 'react-router-dom'
import "../App.css"
const Card = ({animal}) => {

    const navigate = useNavigate();

    function goToDetail(){
        navigate(`/animals/${animal.id}`)
    }

    return ( 
        <section className="card" onClick={goToDetail}>
            <img src={animal.image} alt="" />
            <h2>{animal.name}</h2>
        </section>
     );
}
 
export default Card;