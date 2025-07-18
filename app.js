// Cargar el archivo JSON de la malla curricular
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const mallaContainer = document.getElementById('malla');

    Object.keys(data).forEach(semestre => {
      const semestreContainer = document.createElement('div');
      semestreContainer.classList.add('malla-semestre');

      const semestreTitle = document.createElement('h2');
      semestreTitle.textContent = semestre.replace('_', ' ').toUpperCase();
      semestreContainer.appendChild(semestreTitle);

      const semestreList = document.createElement('ul');

      data[semestre].forEach(asignatura => {
        const asignaturaItem = document.createElement('li');
        asignaturaItem.innerHTML = ${asignatura.nombre} <span id="prerequisito">(${asignatura.prerrequisito})</span>;
        semestreList.appendChild(asignaturaItem);
      });

      semestreContainer.appendChild(semestreList);
      mallaContainer.appendChild(semestreContainer);
    });
  })
  .catch(error => console.error('Error al cargar los datos de la malla:', error));
