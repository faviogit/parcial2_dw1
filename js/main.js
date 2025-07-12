function incrementar(contador) {
let valor =document.getElementById('contador-'+contador).textContent;
valor=parseInt(valor);
valor++;
document.getElementById('contador-'+contador).textContent=valor;
}

function decrementar(contador) {
let valor =document.getElementById('contador-'+contador).textContent;
valor=parseInt(valor);
if (valor>0){
valor--;
}
document.getElementById('contador-'+contador).textContent=valor;
}

function reiniciar(contador) {
document.getElementById('contador-'+contador).textContent='0';
}