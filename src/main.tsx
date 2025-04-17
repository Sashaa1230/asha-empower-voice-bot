
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure to select an element that exists
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  document.body.innerHTML = '<div id="root"></div>';
}

createRoot(document.getElementById("root")!).render(<App />);
