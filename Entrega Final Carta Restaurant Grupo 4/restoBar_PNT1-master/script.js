function enviarDatos() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var telefono = document.getElementById("txtTelefono").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    }

    if (telefono === "") {
        alert("Por favor, ingresa tu número de teléfono.");
        return false;
    }

    if (!/^[0-9]{1,10}$/.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido (solo números y máximo 10 dígitos).");
        return false;
    }

    alert("Su mesa ha sido reservada.");

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtTelefono").value = "";

    return true;
}
