import { Socie } from "./models/socie.model";

// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
// p.textContent = "Hola mundo";
// 4. Append the p element to the div element
app?.appendChild(p);

//Defino un array de tipo socie, lo inicio vacio
let socies: Array<Socie>=[];
//fetch que devuelve los datos
fetch("http://localhost:5000/socies/") 
.then(resp=> {
    resp.json()
    .then (data => {
        socies = data.socies;
//        console.log(data.mensaje);
    })
});
// For loop de cada socie dentro del array
socies.forEach(socie => {
//    let p_nombre = document.createElement("p");
//    p_nombre.textContent = socie.nombre;
let tr = document.createElement("tr");
// nombre
let td_nombre = document.createElement("td");
td_nombre.textContent=socie.nombre;
// apellido
let td_apellido = document.createElement("td");
td_apellido.textContent=socie.apellido;
// nick
let td_nick = document.createElement("td");
td_nick.textContent=socie.nick;
// edad
let td_edad = document.createElement("td");
td_edad.textContent=socie.edad.toString(10);

tr?.appendChild(td_nombre);
tr?.appendChild(td_apellido);
tr?.appendChild(td_nick);
tr?.appendChild(td_edad);
app?.appendChild(tr);

});