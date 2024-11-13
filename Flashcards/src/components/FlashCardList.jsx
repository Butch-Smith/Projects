import data from '../data.js';
import FlashCard from './FlashCard.jsx';

const FlashCardList = () => {

    const flashCards = data;

    return (
        <div className='w-screen h-4/5 flex items-center justify-center'>
            <div className="flex w-4/5 flex-wrap gap-8 items-center justify-center">
                {flashCards.map((card) => (
                    <FlashCard
                        question={card.question}
                        answer={card.answer}
                    />
                ))}
            </div>
        </div>
    );
}

export default FlashCardList;