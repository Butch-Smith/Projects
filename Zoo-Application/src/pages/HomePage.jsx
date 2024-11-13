import Card from "../components/Card.jsx";
import animals from "../animals.js"
import "../App.css"

const HomePage = () => {
    return (
        <section>
            <header>
                <h1>Animals!!</h1>
            </header>
            <div className="animalList">
                {animals.map((animal) => (
                    <Card key={animal.id} animal={animal} />
                ))}
            </div>
        </section>

    );
}

export default HomePage;