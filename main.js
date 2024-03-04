let input= document.querySelector('.input__task')
let button = document.querySelector('.button__add_task')
const listaCompleta = document.querySelector('.list__tasks')

let minhaListaDeItens = []

function adicionar(){
    minhaListaDeItens.push({
        tarefa: input.value, 
        concluida: false
    })
    mostrarTarefas()
    input.value =''
}

function apagar(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function concluirTarefa (posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ''
        
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi= novaLi + `
        <li class="task ${item.concluida && 'done'}">
            <img src="assets/checked.png" alt="check" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="assets/trash.png" alt="trash" onclick="apagar(${posicao})">
        </li>`
    })

    listaCompleta.innerHTML = novaLi


    
}


button.addEventListener('click', adicionar)