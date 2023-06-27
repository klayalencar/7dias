function escolherArea(area) {
  if (area === "Front-End") {
    Swal.fire({
      title: 'Escolha um framework',
      input: 'select',
      inputOptions: {
        'React': 'React',
        'Vue': 'Vue'
      },
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire('Você escolheu aprender ' + result.value + ' no Front-End.');
      }
    });
  } else if (area === "Back-End") {
    Swal.fire({
      title: 'Escolha uma linguagem',
      input: 'select',
      inputOptions: {
        'C#': 'C#',
        'Java': 'Java'
      },
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire('Você escolheu aprender ' + result.value + ' no Back-End.');
      }
    });
  }
  
  Swal.fire({
    title: 'Deseja se especializar na área escolhida ou se tornar Fullstack?',
    input: 'select',
    inputOptions: {
      'especializar': 'Especializar',
      'fullstack': 'Fullstack'
    },
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      if (result.value === 'especializar') {
        Swal.fire('Você escolheu se especializar na área escolhida.');
      } else if (result.value === 'fullstack') {
        Swal.fire('Você escolheu se desenvolver para se tornar Fullstack.');
      }
    }
    
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'OK',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Digite o nome de uma tecnologia que você gostaria de aprender:',
        inputPlaceholder: 'Tecnologia 1'
      },
      {
        title: 'Tem mais alguma tecnologia que você gostaria de aprender?',
        inputPlaceholder: 'Tecnologia 2'
      }
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Você escolheu as seguintes tecnologias para aprender:',
          html: result.value.join('<br>')
        });
      }
    });
  });
}
