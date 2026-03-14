import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("FutureSource app initialization starting...");
createRoot(document.getElementById("root")!).render(<App />);
console.log("FutureSource app render called.");
