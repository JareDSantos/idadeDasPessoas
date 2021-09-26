function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'people/muleque.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'people/rapaz.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'people/adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'people/veio.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'people/lindinha.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'people/linda.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'people/adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'people/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}