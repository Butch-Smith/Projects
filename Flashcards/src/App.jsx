import FlashCardList from "./components/FlashCardList"

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <header className="h-20 bg-blue-300  flex justify-center items-center">
          <h1 className="text-4xl">flashcards!!</h1>
        </header>
        <FlashCardList />
      </div>
    </>
  )
}

export default App
