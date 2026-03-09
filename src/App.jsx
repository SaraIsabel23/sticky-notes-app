import { ColorProvider } from "./context/ColorContext"
import NoteBoard from "./components/NoteBoard"
import ColorSelector from "./components/ColorSelector"
import './App.css'

function App() {
  return (
    <div className="app-container">
      <ColorProvider>
        <h1>🗒️ Sticky Notes</h1>
        <ColorSelector />
        <NoteBoard />
      </ColorProvider>
    </div>
  )
}

export default App
