let adicionar = document.getElementById('adicionar');
let contador = 1;

adicionar.addEventListener('click', function (ev) {
    let nome = document.getElementById('nome').value;
    let dataTarefa = document.getElementById('dataTarefa').value;
    let prioridades = document.getElementById('prioridades').value;

    if (nome && dataTarefa && prioridades) {
        let parteData = dataTarefa.split('-');
        if (prioridades === '1') {
            prioridades = 'Alta prioridade';
        } else if (prioridades === '2') {
            prioridades = 'Média prioridade';
        } else {
            prioridades = 'Baixa prioridade';
        }

        let containerTarefas = document.getElementById('containerTarefas');
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
        let numeroAleatorio3 = Math.floor(Math.random() * 10) + 1;

        let tarefaCriada = document.createElement('div');
        tarefaCriada.id = 'tarefa-' + contador;
        tarefaCriada.className = 'tarefa';
        tarefaCriada.style.background = `#3${numeroAleatorio2}a${numeroAleatorio}${numeroAleatorio3}e`;

        let excluir = document.createElement('button');
        excluir.className = 'excluir';
        excluir.innerText = 'Excluir';
        excluir.style.background = 'gray'
        excluir.style.color = 'white'
        excluir.style.padding = '10px'
        excluir.style.border = 'none'
        excluir.style.marginBottom = '5px'
        let conteudoTarefa = document.createElement('p');
        conteudoTarefa.innerText = `Nome da tarefa: ${nome}\nData da tarefa: ${parteData[2] + '/' + parteData[1] + '/' + parteData[0]}\nPrioridade: ${prioridades}`;

        tarefaCriada.appendChild(excluir);
        tarefaCriada.appendChild(conteudoTarefa);

        let linha = document.createElement('br');

        containerTarefas.appendChild(tarefaCriada);
        containerTarefas.appendChild(linha);

        excluir.addEventListener('click', (function (elementoParaExcluir) {
            return function () {
                elementoParaExcluir.remove();
                linha.remove();
            };
        })(tarefaCriada));

        contador++;
    } else {
        alert('Preencha todos os campos para adicionar a lista de tarefas');
    }
});
