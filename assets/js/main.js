document.getElementById('convertir').addEventListener('click', async()=>{
    let temperaturaF = document.getElementById('temperatura').value;

async function convertirtemperatura(fahrenheit) {
    return(fahrenheit - 32) * (5/9)
}

    const resultado = await convertirtemperatura(parseFloat(temperaturaF))
    document.getElementById('celcius').textContent =`${resultado.toFixed(2)} °C`

})