function cambiarTitulo(){
    console.log("aqui estoy dentro de la funcion cambiarTitulo");
    //traer al titulo o h1 
    //querySelector toma del arbol el titulo
    let titulo = document.querySelector("#titulo")
    console.log(titulo);
    //hace referencia al texto 
    titulo.innerHTML = "Titulo modificado";
    titulo.className = " display-4 text-warning";
}