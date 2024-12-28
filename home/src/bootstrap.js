// import { random } from "lodash";
// const mount = (el) => {
//   el.innerHTML = `<h1>Home ${random(1, 50)}</h1>`;
// };

// if (process.env.NODE_ENV === "development") {
//   const el = document.getElementById("dev-home");

//   if (el) mount(el);
// }

// export { mount };

import { createApp } from "vue";
import App from "./components/App.vue";

const mount = (el) => {
  createApp(App).mount(el);
};

if (process.env.NODE_ENV === "development") {
  mount("#dev-home");
}

export { mount };
