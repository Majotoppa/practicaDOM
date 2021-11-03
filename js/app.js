function cambiarTitulo(){
    console.log("aqui estoy dentro de la funcion cambiarTitulo");
    //traer al titulo o h1 
    //querySelector toma del arbol el titulo
    //let titulo = document.querySelector("#titulo");

    //otra forma de traer h1 
    let tituloh1 = document.getElementById("titulo");
    console.log(titulo);
    //hace referencia al texto 
    titulo.innerHTML = "Titulo modificado";
    titulo.className = " display-4 text-warning";
}

function verMas(){
    console.log("desde la funcion ver mas");
    //buscar el elemento padre
    let contenedorPadre = document.querySelector("#articulo");
    console.log(contenedorPadre); //solo para ver si traemos bien el div
    let btnVerMas = document.querySelector("#btnVerMas");

   if(btnVerMas.innerHTML == "Ver mas"){
        //opcion 1 - camino corto
   
    //para manteener el parrafo que tenia y agregar otro parrafo hay que usar el acumulador que seria +=

    /*contenedorPadre.innerHTML += `<p class="lead">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Reprehenderit consectetur quo nam eligendi at ratione, ipsam qui
    maxime explicabo aliquid! Eos qui doloribus porro quisquam natus
    molestias rem repudiandae rerum voluptates officia nulla repellat
    laborum adipisci sed maxime modi iste molestiae magni unde id, ipsam
    odit repellendus architecto veritatis! Eligendi!
  </p>`; */

  //opcion 2 - camino largo
   
  // 1- crear el elemento
  let parrafo = document.createElement("p");
  // 2- agregar lo que deseo en este caso mas parrafo
  parrafo.innerHTML = "aqui agrego todo el parrafo de prueba";
  parrafo.className = "lead";
  //3- insertar el elemento en el maquetado
  contenedorPadre.appendChild(parrafo);

  
  btnVerMas.innerHTML = "Ocultar";
  btnVerMas.className = "btn btn-danger";

   }else{
       console.log("quiero ocultar el parrafo")
       //borrar o elininar el parrafo del dom  ((eliminar un nodo))
       //con chilnodes preguntamos si tiene hijos
       console.log(contenedorPadre.hasChildNodes());
       console.log(contenedorPadre.children);


       //cambiar el texto del boton de nuevo a ver mas
       btnVerMas.innerHTML = "Ver mas";
       btnVerMas.className = "btn btn-primary";
   }

   //prueba

  
}