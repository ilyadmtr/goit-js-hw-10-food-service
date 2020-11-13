import css from "./css/style.css";
import templates from "./templates.js"


const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

const switcher = document.querySelector('.theme-switch__toggle')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
document.body.classList.add(`${localStorage.classlistBody}`)
if(document.body.classList.contains(Theme.DARK)){
  switcher.checked =  true;
}

switcher.addEventListener("change", ()=>{
  if(document.body.classList.contains(Theme.DARK)){
    document.body.classList.remove(Theme.DARK)
    document.body.classList.add(Theme.LIGHT)
  }
  else if(document.body.classList.contains(Theme.LIGHT)){
  document.body.classList.remove(Theme.LIGHT)
  document.body.classList.add(Theme.DARK)
  }
  localStorage.setItem("classlistBody", document.body.classList.value)
})

