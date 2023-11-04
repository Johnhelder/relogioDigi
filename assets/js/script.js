const div_data = document.getElementById("div_data");
const div_relogio = document.getElementById("div_relogio");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const hora_alarme = document.getElementById("hora_alarme");
const timer = document.getElementById("timer");

const som_alarme = new Audio("alarme.mp3");

som_alarme.loop=-1;



const data = new Date();