// Cargar el archivo JSON de la malla curricular
fetch('data.json') // Verifica que la ruta sea correcta
  .then(response => response.json()) // Parsear el JSON
  .then(data => {
    const mallaContainer = document.getElementById('malla');

    // Verificar si los datos se están cargando correctamente
    console.log(data);

    // Iterar sobre los años
    Object.keys(data).forEach(year => {
      const yearContainer = document.createElement('div');
      yearContainer.classList.add('malla-year');

      const yearTitle = document.createElement('h2');
      yearTitle.textContent = Año ${year.replace('year', '')};
      yearContainer.appendChild(yearTitle);

      // Iterar sobre los semestres de cada año
      Object.keys(data[year]).forEach(semestre => {
        const semestreContainer = document.createElement('div');
        semestreContainer.classList.add('malla-semestre');

        const semestreTitle = document.createElement('h3');
        semestreTitle.textContent = ${semestre.replace('_', ' ').toUpperCase()};
        semestreContainer.appendChild(semestreTitle);

        const semestreList = document.createElement('ul');

        // Iterar sobre las asignaturas de cada semestre
        data[year][semestre].forEach(asignatura => {
          const asignaturaItem = document.createElement('li');
          asignaturaItem.innerHTML = ${asignatura.nombre} <span id="prerequisito">(${asignatura.prerrequisito})</span>;
          semestreList.appendChild(asignaturaItem);
        });

        semestreContainer.appendChild(semestreList);
        yearContainer.appendChild(semestreContainer);
      });

      mallaContainer.appendChild(yearContainer);
    });
  })
  .catch(error => {
    // Mostrar error en caso de que no se pueda cargar el archivo
    console.error('Error al cargar los datos de la malla:', error);
  });
  .catch(error => console.error('Error al cargar los datos de la malla:', error));
