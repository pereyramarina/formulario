function imprimirFormulario() {
    const formulario = document.querySelector("#miFormulario");
    if (!formulario) {
        console.error("No se encontró el formulario");
        return;
    }

    const { nombre, apellido, edad, nacionalidad, comentarios } = formulario.elements;

    // Verificación de campos obligatorios
    if (!nombre.value.trim() || !apellido.value.trim() || !edad.value || !nacionalidad.value) {
        console.error("Por favor, completa todos los campos obligatorios.");
        return;
    }

    const datos = {
        nombre: nombre.value.trim(),
        apellido: apellido.value.trim(),
        edad: edad.value,
        nacionalidad: nacionalidad.value,
        comentarios: comentarios.value.trim() || "Sin comentarios"
    };

    console.log(datos);
}