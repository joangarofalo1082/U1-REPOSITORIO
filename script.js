// Botón imprimir
document.getElementById("printBtn").addEventListener("click", function () {
    window.print();
});

// Mensaje simple al cargar la página
window.addEventListener("load", function () {
    console.log("Página cargada correctamente");
});