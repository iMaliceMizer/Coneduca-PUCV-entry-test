function añadirButtonListener() {
  var añadirOtra = document.getElementById('añadir-otra-btn');
  var añadirOtro = document.getElementById('añadir-otro-btn');
  var areaCounter = 1;
  var hobbyCounter = 1;

  añadirOtra.addEventListener('click', function() {
    areaCounter++;
    var newInput = document.createElement('div');
    newInput.className = 'form-group input-container';

    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'form-control form-control-sm small-input';
    inputField.id = 'Area' + areaCounter;
    inputField.name = 'Area' + areaCounter;
    inputField.placeholder = 'Area de interés #' + areaCounter;

    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerText = 'X';
    removeBtn.dataset.target = 'Area' + areaCounter;

    newInput.appendChild(inputField);
    newInput.appendChild(removeBtn);

    var areasContainer = document.getElementById('areas-container');
    areasContainer.appendChild(newInput);

    removeBtn.addEventListener('click', removeInputField);
  });

  añadirOtro.addEventListener('click', function() {
    hobbyCounter++;
    var newInput = document.createElement('div');
    newInput.className = 'form-group input-container';

    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'form-control form-control-sm small-input';
    inputField.id = 'Hobby' + hobbyCounter;
    inputField.name = 'Hobby' + hobbyCounter;
    inputField.placeholder = 'Hobby #' + hobbyCounter;

    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerText = 'X';
    removeBtn.dataset.target = 'Hobby' + hobbyCounter;

    newInput.appendChild(inputField);
    newInput.appendChild(removeBtn);

    var hobbiesContainer = document.getElementById('hobbies-container');
    hobbiesContainer.appendChild(newInput);

    removeBtn.addEventListener('click', removeInputField);
  });

  function removeInputField() {
    var targetId = this.dataset.target;
    var field = document.getElementById(targetId);
    var container = field.parentNode;
    container.parentNode.removeChild(container);

    var allAreasRemoved = document.querySelectorAll('.input-container[id^="Area"]').length === 0;
    var allHobbiesRemoved = document.querySelectorAll('.input-container[id^="Hobby"]').length === 0;

    if (targetId.startsWith('Area') && allAreasRemoved) {
      areaCounter = 1;
    }

    if (targetId.startsWith('Hobby') && allHobbiesRemoved) {
      hobbyCounter = 1;
    }
  }

  var generarTextoBtn = document.getElementById('generar-btn');
  generarTextoBtn.addEventListener('click', generarTexto);

  function generarTexto() {
    var Nombre = document.getElementById('Nombre').value;
    var result = Nombre.bold();
    document.getElementById("presentation-text").innerHTML = result;

    var Primer_Apellido = document.getElementById('Primer_Apellido').value;
    var Segundo_Apellido = document.getElementById('Segundo_Apellido').value;
    var areas = document.querySelectorAll('input[id^="Area"]');
    var hobbies = document.querySelectorAll('input[id^="Hobby"]');
    var Correo = document.getElementById('Correo').value;
    var Telefono = document.getElementById('Telefono').value;

    var areasText = '';
    var hobbiesText = '';

    areas.forEach(function(area, index) {
      areasText += area.value;
      if (index !== areas.length - 1) {
        areasText += ', ';
      } else {
        areasText = areasText.replace(/,([^,]*)$/, ' y $1');
      }
    });

    hobbies.forEach(function(hobby, index) {
      hobbiesText += hobby.value;
      if (index !== hobbies.length - 1) {
        hobbiesText += ', ';
      } else {
        hobbiesText = hobbiesText.replace(/,([^,]*)$/, ' y $1');
      }
    });

    var texto = `¡Hola! Soy <b>${Nombre}</b> <b>${Primer_Apellido}</b> <b>${Segundo_Apellido}</b>. Me apasiona el aprendizaje y siempre busco nuevos desafíos. Disfruto colaborar en equipo, comunicarme eficazmente y encontrar soluciones creativas. Además de mi curiosidad, me interesa el/la <b>${areasText}</b>. Creo en el impacto positivo y en aplicar mis habilidades en proyectos significativos. Fuera del trabajo disfruto el/la <b>${hobbiesText}</b>. Soy una persona apasionada, curiosa y orientada a resultados, lista para enfrentar nuevos retos con entusiasmo. Puedes contactarme a través de <b>${Correo}</b> o por teléfono al <b>${Telefono}</b>. ¡Espero conocerte pronto!`;


    
    var modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';

    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    var modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    var closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';

    var modalTitle = document.createElement('h2');
    modalTitle.innerText = 'Presentación personal';

    var separatorLine1 = document.createElement('hr');
    separatorLine1.className = 'separator-line';

    var modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    var presentationText = document.getElementById('presentation-text');
    presentationText.innerHTML = texto;
    presentationText.readOnly = true;
    presentationText.value = texto;

    var separatorLine2 = document.createElement('hr');
    separatorLine2.className = 'separator-line';

    var modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    var closeMBtn = document.createElement('button');
    closeMBtn.id = 'close-modal-btn';
    closeMBtn.innerText = 'Cerrar';
    closeMBtn.className = 'btn btn-success border-0'
    closeMBtn.style.backgroundColor = '#bfbfbf';
    closeMBtn.style.marginRight = '5px';

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });

    var copyBtn = document.createElement('button');
    copyBtn.id = 'copy-modal-btn';
    copyBtn.className = 'btn btn-success border-0'
    copyBtn.innerText = 'Copiar';
    copyBtn.style.backgroundColor = '#1ccbab';
    copyBtn.style.marginRight = '5px';
    copyBtn.innerHTML = 'Copiar <i class="far fa-copy"></i>';


    var copyIcon = document.createElement('i');
    copyIcon.className = 'bi bi-copy';

    modalHeader.appendChild(closeBtn);
    modalHeader.appendChild(modalTitle);

    modalBody.appendChild(presentationText);
    modalFooter.appendChild(closeMBtn);
    modalFooter.appendChild(copyBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(separatorLine1);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(separatorLine2);
    modalContent.appendChild(modalFooter);

    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    closeMBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(presentationText.innerText)
          .then(function() {
            alert('¡Texto copiado en el portapapeles!');
            modal.style.display = 'none';
          })
          .catch(function(error) {
            console.error('Error copying text:', error);
          });
      });
      
      modal.style.display = 'block';
      

    var textareaHeight = presentationText.scrollHeight + 'px';
    presentationText.style.height = textareaHeight;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  añadirButtonListener();
});