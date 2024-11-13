import { useNavigate, useParams } from 'react-router-dom'
import animals from "../animals.js"

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const animal = animals.find((anim) => anim.id === Number(id));

    if (!animal) {
        return <h2>what the sigma</h2>
    }


    return (
        <section className='detailPageMain'>
            <section className='detailCard'>
                <div>
                    <img src={animal.image} alt="" />
                    <h1>{animal.name}</h1>
                </div>
                <div className='detailInfo'>
                    <h3>Habitat: {animal.habitat}</h3>
                    <h3>Diet: {animal.diet}</h3>
                    <p>{animal.description}</p>
                </div>
                <button onClick={() => navigate(-1)} >back</button>
            </section>
        </section>
    );
}
export default DetailPage;