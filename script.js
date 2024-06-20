document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section.style.opacity = '1';
        section.style.animationPlayState = 'running';
      }
    });
  });
  // JavaScript para manejar la galería y acciones de botones
document.addEventListener('DOMContentLoaded', function() {
  const galeria = document.querySelector('.galeria');
  const btnSeleccionado = document.querySelector('.btn-seleccionado');

  // Datos simulados de alimentos para cada categoría
  const alimentos = {
      desayuno: [
          { nombre: 'Avena con frutas', imagen: 'img/avena.jpg' },
          { nombre: 'Yogur con granola', imagen: 'img/yogur.jpg' },
          { nombre: 'Tostadas integrales', imagen: 'img/tostadas.jpg' }
      ],
      comida: [
          { nombre: 'Ensalada verde', imagen: 'img/ensalada.jpg' },
          { nombre: 'Pechuga de pollo a la plancha', imagen: 'img/pollo.jpg' },
          { nombre: 'Arroz integral con verduras', imagen: 'img/arroz.jpg' }
      ],
      cena: [
          { nombre: 'Sopa de verduras', imagen: 'img/sopa.jpg' },
          { nombre: 'Pescado al horno', imagen: 'img/pescado.jpg' },
          { nombre: 'Quinoa con vegetales', imagen: 'img/quinoa.jpg' }
      ]
  };

  // Función para mostrar alimentos según la categoría seleccionada
  function mostrarAlimentos(categoria) {
      galeria.innerHTML = '';
      alimentos[categoria].forEach(alimento => {
          const itemHTML = `
              <div class="item">
                  <img src="${alimento.imagen}" alt="${alimento.nombre}">
                  <p>${alimento.nombre}</p>
              </div>
          `;
          galeria.innerHTML += itemHTML;
      });

      // Animar las imágenes al cargar
      const items = galeria.querySelectorAll('.item');
      items.forEach((item, index) => {
          setTimeout(() => {
              item.querySelector('img').style.opacity = '1';
          }, index * 200);
      });
  }

  // Manejar clics en botones de categoría
  const btnCategorias = document.querySelectorAll('.btn-categoria');
  btnCategorias.forEach(btn => {
      btn.addEventListener('click', () => {
          const categoria = btn.getAttribute('data-categoria');
          mostrarAlimentos(categoria);
      });
  });

  // Acción al hacer clic en el botón de seleccionar alimentos
  btnSeleccionado.addEventListener('click', () => {
      // Aquí puedes redirigir o realizar alguna acción adicional
      alert('¡Alimentos seleccionados! Redirigiendo...');
      // Ejemplo de redirección a otra página
      window.location.href = 'otra-pagina.html';
  });
});
// JavaScript para manejar la galería y acciones de botones
document.addEventListener('DOMContentLoaded', function() {
  const galeria = document.querySelector('.galeria');
  const btnSeleccionado = document.querySelector('.btn-seleccionado');

  // Datos simulados de medicinas para cada categoría
  const medicinas = {
      comunes: [
          { nombre: 'Paracetamol', imagen: 'img/paracetamol.jpg' },
          { nombre: 'Ibuprofeno', imagen: 'img/ibuprofeno.jpg' },
          { nombre: 'Aspirina', imagen: 'img/aspirina.jpg' }
      ],
      preventivas: [
          { nombre: 'Vitaminas', imagen: 'img/vitaminas.jpg' },
          { nombre: 'Vacunas', imagen: 'img/vacunas.jpg' },
          { nombre: 'Antioxidantes', imagen: 'img/antioxidantes.jpg' }
      ],
      esenciales: [
          { nombre: 'Antibióticos', imagen: 'img/antibioticos.jpg' },
          { nombre: 'Antipalúdicos', imagen: 'img/antipaludicos.jpg' },
          { nombre: 'Antirretrovirales', imagen: 'img/antirretrovirales.jpg' }
      ]
  };

  // Función para mostrar medicinas según la categoría seleccionada
  function mostrarMedicinas(categoria) {
      galeria.innerHTML = '';
      medicinas[categoria].forEach(medicina => {
          const itemHTML = `
              <div class="item">
                  <img src="${medicina.imagen}" alt="${medicina.nombre}">
                  <p>${medicina.nombre}</p>
              </div>
          `;
          galeria.innerHTML += itemHTML;
      });

      // Animar las imágenes al cargar
      const items = galeria.querySelectorAll('.item');
      items.forEach((item, index) => {
          setTimeout(() => {
              item.querySelector('img').style.opacity = '1';
          }, index * 200);
      });
  }

  // Manejar clics en botones de categoría
  const btnCategorias = document.querySelectorAll('.btn-categoria');
  btnCategorias.forEach(btn => {
      btn.addEventListener('click', () => {
          const categoria = btn.getAttribute('data-categoria');
          mostrarMedicinas(categoria);
      });
  });

  // Acción al hacer clic en el botón de seleccionar medicinas
  btnSeleccionado.addEventListener('click', () => {
      // Aquí puedes redirigir o realizar alguna acción adicional
      alert('¡Medicinas seleccionadas! Redirigiendo...');
      // Ejemplo de redirección a otra página
      window.location.href = 'otra-pagina.html';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formulario-donaciones');
  const mensajeAgradecimiento = document.getElementById('mensaje-agradecimiento');

  formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que se envíe el formulario por defecto

      // Aquí podrías enviar los datos del formulario a tu backend (por ejemplo, con fetch o axios)

      // Mostrar mensaje de agradecimiento y limpiar el formulario
      mensajeAgradecimiento.style.display = 'block';
      formulario.reset();

      // Opcional: podrías agregar aquí una función para enviar los datos del formulario al servidor
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const btnSeleccionadoAlimentos = document.querySelector('.btn-seleccionado-alimentos');
  const btnSeleccionadoMedicinas = document.querySelector('.btn-seleccionado-medicinas');
  const seccionAgradecimiento = document.getElementById('agradecimiento');
  const listaSeleccionados = document.getElementById('lista-seleccionados');
  const btnInicio = document.getElementById('btn-inicio');

  function mostrarAgradecimiento(selecciones) {
      listaSeleccionados.innerHTML = '';
      selecciones.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          listaSeleccionados.appendChild(li);
      });

      seccionAgradecimiento.style.display = 'block';
  }

  btnSeleccionadoAlimentos.addEventListener('click', function() {
      const seleccionados = Array.from(document.querySelectorAll('.galeria-alimentos .item-seleccionado')).map(item => item.textContent);
      mostrarAgradecimiento(seleccionados);
  });

  btnSeleccionadoMedicinas.addEventListener('click', function() {
      const seleccionados = Array.from(document.querySelectorAll('.galeria-medicinas .item-seleccionado')).map(item => item.textContent);
      mostrarAgradecimiento(seleccionados);
  });

  btnInicio.addEventListener('click', function() {
      seccionAgradecimiento.style.display = 'none';
      // Aquí puedes agregar lógica para redirigir al inicio, si es necesario
      // Por ejemplo: window.location.href = 'index.html';
  });
});


