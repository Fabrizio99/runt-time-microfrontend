import { mount as homeMount } from "home/HomeApp";
import { mount as authMount } from "auth/AuthApp";

homeMount("#home-container");
authMount(document.getElementById("auth-container"));
