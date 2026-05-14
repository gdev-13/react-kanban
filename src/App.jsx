import Header from './components/Header/Header'
import Column from './components/Column/Column'

function App() {
  return (
    <div>
      <Header />

      <main className="board">
        <Column title="To Do" />
        <Column title="Doing" />
        <Column title="Done" />
      </main>
    </div>
  )
}

export default App