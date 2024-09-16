import './App.css'
import Main from './components/Main'
import Com_D from './components/Com_D'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <Com_D/>
      </Main>
    </>
  )
}

export default App
