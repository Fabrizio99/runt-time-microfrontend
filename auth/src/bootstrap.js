import { createRoot } from "react-dom/client";
import App from "./components/App";

const mount = (el) => {
  // Renderiza tu componente React en su lugar
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-auth");

  if (el) mount(el);
}

export { mount };
