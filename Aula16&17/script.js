const form = document.querySelector("form");
const input = document.querySelector(".novatarefa");
const aFazer = document.querySelector(".a-fazer");
const feitas = document.querySelector(".feitas");

function deletarTarefa(event) {
    const botaoDeletar = event.target;
    const tarefa = botaoDeletar.closest("li");

    tarefa.remove()
}

function formatFeito(event) {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");

    if (checkbox.checked) {
        feitas.append(tarefa)
    } else {
        aFazer.append(tarefa)
    }
}

form.addEventListener("submit", event =>{
    event.preventDefault();

    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    checkbox.addEventListener("input", formatFeito);

    const textoTarefa = document.createElement("span");
    textoTarefa.innerText = input.value

    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerText = "Deletar";

    botaoDeletar.addEventListener("click", deletarTarefa);

    tarefa.append(checkbox);
    tarefa.append(textoTarefa);
    tarefa.append(botaoDeletar);

    aFazer.append(tarefa);
    input.value = "";

})

