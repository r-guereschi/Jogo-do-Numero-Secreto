numerosSorteados = [];

let numeroMaximo = 20;
let numeroSecreto = randomNumber();
let numeroTentativas = 1;

function verificarChute() {
	let chute = document.querySelector("input").value;
	palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa";

	if (chute > numeroSecreto) {
		limparCampo();
		exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
	} else if (chute < numeroSecreto) {
		limparCampo();
		exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
	} else {
		exibirTextoNaTela("h1", "Acertou!");
		exibirTextoNaTela(
			"p",
			`Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}!`
		);
		document.getElementById("reiniciar").removeAttribute("disabled");
	}
	numeroTentativas++;
}

exibirMensagensIniciais();

function exibirMensagensIniciais() {
	exibirTextoNaTela("h1", "Jogo do número secreto");
	exibirTextoNaTela("p", `Escolha um valor de 1 a ${numeroMaximo}`);
	document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirTextoNaTela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
	responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function randomNumber() {
	let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
	let quantidadeDeNumerosSorteados = numerosSorteados.length;

	if (quantidadeDeNumerosSorteados == numeroMaximo) {
		numerosSorteados = [];
	}

	if (numerosSorteados.includes(numeroSorteado)) {
		return randomNumber();
	} else {
		numerosSorteados.push(numeroSorteado);
		return numeroSorteado;
	}
}

function limparCampo(params) {
	chute = document.querySelector("input");
	chute.value = "";
}

function reiniciar() {
	numeroSecreto = randomNumber();
	numeroTentativas = 1;
	limparCampo();

	exibirMensagensIniciais();
}
