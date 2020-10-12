//VARS
const formularioAgregar=document.getElementById("form-agregar");
const formContainer=document.getElementById("form-container");
const listaTareas=document.getElementById("tareas");
const input=document.getElementById("nuevaTarea");
//const btnEnviar=document.getElementById("btn-enviar");
//EVENTS
//agregar tarea
formularioAgregar.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(input.value.trim()==="" || !input.value){
        alert("Debe ingresar una tarea correcta");
    } else{
        if(listaTareas.children[0].className && listaTareas.children[0].className=="mensajeVacio"){
            listaTareas.innerHTML="";    
        }
        listaTareas.innerHTML+=`
            <li>
                    <p>${input.value}</p>
                    <div class="item-buttons">
                        <button class="btn-eli">Eliminar</button>
                    </div>
            </li>
        `;
        input.value="";
        alert("Se ingres la tarea correctamente");
        btnEliRefresh();
        //btnModRefresh();
    }
});


function btnEliRefresh(){
    const btnEli=document.querySelectorAll(".btn-eli");
    btnEli.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            e.target.parentElement.parentElement.remove();
            alert("Se elimino correctamente.")
            if(listaTareas.innerHTML.trim()===""){
                listaTareas.innerHTML=`
                <p class="mensajeVacio">No existen tareas.</p>
                `;
            }
        })
    })
}

/*function btnModRefresh(){
    const btnEli=document.querySelectorAll(".btn-mod");
    btnEli.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            input.value=e.target.parentElement.previousSibling.previousSibling.textContent;
            btnEnviar.value="Modificar Tarea";
        })
    })
}*/