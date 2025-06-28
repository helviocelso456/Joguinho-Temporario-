

document.getElementById('corno-btn').addEventListener("click",function(){
    var corno = document.getElementById('corno-value').value 
    console.log(corno)

    if((corno == "Júnior") || 
        (corno == "Junior") || 
        (corno == "júnior") || 
        (corno == "junior") || 
        (corno == "Teles") || 
        (corno == "teles") || 
        (corno == "TELES") || 
        (corno == "JÚNIOR") || 
        (corno == "JUNIOR"))
    {
        document.getElementById("corno-name").innerHTML = "PARABÉNS, ACHOU O CORNO!! ("+corno+"),NELCIA LEVA ESMIRRA NA ORELHA"
        document.getElementById("corno-name").style.fontSize = "18px"
        document.getElementById('profile-pic').style.backgroundImage = "url('download-5-1.jpg')"
    }

    else if((corno == 'SCOTT') || (corno == 'Scott') || (corno == 'scott'))
    {
        document.getElementById("corno-name").innerHTML = "PARABÉNS, SCOTT FODE A NELCIA"
        document.getElementById("corno-name").style.fontSize = "18px"
        document.getElementById('profile-pic').style.backgroundImage = "url('images.jpeg')"
    }

    else
    {
       document.getElementById("corno-name").innerHTML = "TENTE NOVAMENTE, VAMOS TODOS FODER ESSA PUTA"
       document.getElementById("corno-name").style.fontSize = "18px"
    }
})