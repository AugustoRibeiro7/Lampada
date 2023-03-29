function ligar ()
{
    document.getElementById("lampada").src="lampada_on.png"
    document.body.style.backgroundImage="radial-gradient(farthest-side at 50% 30% ,yellow 10%, rgb(219, 219, 172), rgb(222, 221, 210))"
}

function desligar()
{
    document.getElementById("lampada").src="lampada_off.png"
    document.body.style.background="rgb(224, 222, 222)"
}