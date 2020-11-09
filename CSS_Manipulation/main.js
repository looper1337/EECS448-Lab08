function manip(){
	var para = document.getElementById("dummy")


	var redBorder = document.getElementById("red").value
  
	var greenBorder = document.getElementById("green").value
	var blueBorder = document.getElementById("blue").value
	var borderWidth = document.getElementById("width").value



	var redBack = document.getElementById("redBG").value
	var greenBack = document.getElementById("greenBG").value
	var blueBack = document.getElementById("blueBG").value


	para.style.borderColor = "rgb("+redBorder+","+greenBorder+","+blueBorder+")"
	para.style.borderWidth = borderWidth+"px"



	para.style.backgroundColor = "rgb("+redBack+","+greenBack+","+blueBack+")"

}
