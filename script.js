// Seleccionamos los elementos del DOM
const btnToggleForm = document.getElementById('btn-toggle-form');
const formulario = document.getElementById('formulario');
const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('nuevaTarea');
const cuerpoTabla = document.getElementById('cuerpo-tabla');

// Arreglo para almacenar las tareas
let tareas = [];

// Mostrar/Ocultar el formulario al hacer clic en "Agregar tarea"
btnToggleForm.addEventListener('click', () => {
    formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
});

// Agregar una tarea a la lista
formTarea.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nuevaTarea = inputTarea.value.trim();

    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        actualizarListaTareas();
        inputTarea.value = ''; // Limpiar el formulario
        formulario.style.display = 'none'; // Ocultar el formulario
    }
});

// Actualizar la lista de tareas en la tabla
function actualizarListaTareas() {
    cuerpoTabla.innerHTML = ''; // Limpiar el cuerpo de la tabla

    tareas.forEach((tarea, index) => {
        const fila = document.createElement('tr');
        
        const celdaTarea = document.createElement('td');
        celdaTarea.textContent = tarea;
        
        const celdaBoton = document.createElement('td');
        const btnFinalizar = document.createElement('button');
        btnFinalizar.textContent = 'Finalizar';
        btnFinalizar.classList.add('btn', 'btn-danger');
        btnFinalizar.addEventListener('click', () => eliminarTarea(index));
        
        celdaBoton.appendChild(btnFinalizar);
        fila.appendChild(celdaTarea);
        fila.appendChild(celdaBoton);
        
        cuerpoTabla.appendChild(fila);
    });
}

// Eliminar una tarea de la lista
function eliminarTarea(index) {
    tareas.splice(index, 1); // Eliminar la tarea del arreglo
    actualizarListaTareas(); // Actualizar la tabla
}
