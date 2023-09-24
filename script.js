// SALÁRIO LIQUIDO
const calcINSS = (sal) => {
  let INSS = 0;

  if (sal > 0 && sal < 1320) {
    INSS = sal * 0.075;
  } else if (sal < 2571.29) {
    INSS = sal * 0.09;
  } else if (sal < 3856.94) {
    INSS = sal * 0.12;
  } else if (sal > 7507.49) {
    INSS = sal * 0.14;
  } else {
    window.alert("Digitou errado seu BURRO!");
  }

  return INSS;
};

const calcIR = (sal) => {
  let IR = 0;

  if (sal > 2112) {
    IR = sal * 0.075;
  } else if (sal < 2826.65) {
    IR = sal * 0.15;
  } else if (sal < 3751.05) {
    IR = sal * 0.225;
  } else if (sal > 4664.68) {
    IR = sal * 0.275;
  } else {
    window.alert("Digitou errado seu BURRO!");
  }

  return IR;
};

function salarioLiquido() {
  const salarioBruto = parseFloat(
    document.querySelector("#input-salario-bruto").value
  );

  const descExtra = parseFloat(
    document.querySelector("#input-salario-descontos").value
  );

  if (salarioBruto <= 0) window.alert("Insira o valor novamente", salarioBruto);

  const IR = calcIR(salarioBruto);
  const INSS = calcINSS(salarioBruto);
  let res = 0;

  if (descExtra === 0 || isNaN(descExtra)) {
    console.log("entrou");
    res = salarioBruto - INSS - IR;
  } else {
    res = salarioBruto - INSS - IR - descExtra;
  }

  imprimir("Seu salario liquido deu: ", res);
}

// RECISÃO
function calcRecisao() {
  const salario = parseFloat(
    document.querySelector("#input-salario-bruto").value
  );

  const diasTrabalhados = parseFloat(
    document.querySelector("#dias-trabalhados").value
  );

  const saldoSalario = (salario / 30) * diasTrabalhados;

  imprimir("Sua Recisão deu: ", saldoSalario);
}

//FERIAS
function calcFerias() {
  const salarioBruto = parseFloat(
    document.querySelector("#input-salario-bruto").value
  );

  const meses = parseFloat(
    document.querySelector("#input-meses-trabalhados").value
  );

  let valFinal = (salarioBruto * meses) / 12;
  valFinal = valFinal + valFinal / 3;

  imprimir("O Valor da suas ferias deu: ", valFinal);
}

// IMPRESSÃO
function imprimir(tipo, resultado) {
  let res = document.querySelector(".resposta");
  res.innerText = ``;
  res.innerText = `${tipo} R$ ${resultado.toFixed(2)}`;

  voltarPacleholder();
}

//FUNÇÕES PARA EDSTILIZAÇÃO

// tirar placeholder do input
let input = document.querySelector(".input-generico");
function voltarPacleholder() {
  let place = input.getAttribute("placeholder");

  input.setAttribute("placeholder", "");

  let blur = () => {
    input.setAttribute("placeholder", place);
  };
  input.addEventListener("blur", blur);
}

input.addEventListener("click", () => {
  voltarPacleholder();
});

function returnImitPosition() {
  let footer = document.querySelector("#footer");

  footer.classList.remove("footer1");
  footer.classList.add("footer2");
  footer.classList.remove("footer2");
  footer.classList.add("footer1");
}
