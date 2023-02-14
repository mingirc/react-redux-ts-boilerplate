import ReactDOM from "react-dom/client"
import App from "./App"

const rootElement = document.getElementById("root")
if (rootElement === null) throw new Error(`The "rootElement" is missing!`)
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
