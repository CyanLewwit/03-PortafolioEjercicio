const inputs = document.querySelectorAll(".formulario");
const btt = document.querySelector(".formcontato__botao");
var validador = true;

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    Validar(input.target);
  });
});

function Validar(input){
  const tipoDeInput = input.dataset.tipo;
  var valor = input.value.trim();
  const idMensaje = document.querySelector("#"+tipoDeInput);



  if(valor === ""){
    idMensaje.textContent = "Este campo no puede estar Vacio";
    idMensaje.classList.remove("ghost");
    input.classList.add("input-container--invalid");
  } else {
    idMensaje.textContent = "";
    idMensaje.classList.add("ghost");
    input.classList.remove("input-container--invalid");


    if(tipoDeInput === "nombre"){
      if(input.value.length > 50){
        idMensaje.textContent = "Este campo no puede tener mas de 50 caracteres";
        idMensaje.classList.remove("ghost");
        input.classList.add("input-container--invalid");
      }
    }

    if(tipoDeInput === "asunto"){
      if(input.value.length > 50){
        idMensaje.textContent = "Este campo no puede tener mas de 50 caracteres";
        idMensaje.classList.remove("ghost");
        input.classList.add("input-container--invalid");
      }
    }

    if(tipoDeInput === "email"){
      const regex = "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
      let objetoRegex = new RegExp(regex, 'g');


      let control = (objetoRegex.test(input.value.toLowerCase()));

      if(!control){
        idMensaje.textContent = "Email invalido";
        idMensaje.classList.remove("ghost");
        input.classList.add("input-container--invalid");
      }
    }

    if(tipoDeInput === "msj"){
      if(input.value.length > 300){
        idMensaje.textContent = "Este campo no puede tener mas de 300 caracteres";
        idMensaje.classList.remove("ghost");
        input.classList.add("input-container--invalid");
      }
    }

  }
}




