$(document).ready(function() {
    // Agrega el evento click al botón con el ID 'enviarcontacto'
    $('#enviarcontacto').click(function() {
      // Muestra una alerta con el mensaje indicado
      alert("se envio correctamente, nos pondremos en contacto lo mas pronto posible");
    });
  });

 $(document).ready(function(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))  
  });

