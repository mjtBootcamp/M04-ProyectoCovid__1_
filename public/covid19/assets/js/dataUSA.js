import { datostabla } from "./jsChartUsa.js";

//JTW autorizacioin de acceso a información 
const PostData = async (email, password) => {
  try {
    let payload = { email, password }
    const response = await fetch('http://localhost:3000/api/login',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    const token = await response.json()
      return token
  } catch (error) {
    console.log(error);
  }
};
const getData = async (jwt) => {
  try {
    let {token} = jwt;
    const response = await fetch('http://localhost:3000/api/country/usa',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    const data = await response.json()
    return data
  } catch (err) {
    console.log(`Error: ${err}`)
  }
  console.log(getData())
};

document.getElementById('formulario').addEventListener('submit', async (event) => {
  event.preventDefault()
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value
  const JWT = await PostData(email, password)
  const posts = await getData(JWT)
  datostabla(posts);
  bottonVisible();
  document.getElementById('exampleInputEmail1').value=" ";
  document.getElementById('exampleInputPassword1').value="";
})
//muestra boton para cerrar sesiòn
const bottonVisible=()=>{
  document.getElementById("csesion").style.display="block";
}

//Cierra sesión
document.getElementById('csesion').addEventListener('click', async (event) => {
  event.preventDefault()
  cerrarSesion()
})
const cerrarSesion=()=>{
  localStorage.clear();
  document.getElementById("csesion").style.display="none";
  document.getElementById('titulo1').innerHTML="Gracias por visitar nuestro sitio";
  document.getElementById('GraficoUSA').innerHTML="";
}