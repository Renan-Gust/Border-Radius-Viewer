function changeValueTopLeft() {
var borderTopLeft = Number(document.querySelector("#input-top-left").value)
    document.querySelector("#content").style.borderTopLeftRadius = borderTopLeft + "px"

    if(borderTopLeft > 0){
      document.querySelector("#screen").innerHTML += "Border Radius Top Left: " + borderTopLeft + "<br>"
    }
}

function changeValueTopRight() {
var borderTopRight = Number(document.querySelector("#input-top-right").value)
    document.querySelector("#content").style.borderTopRightRadius = borderTopRight + "px"

    if(borderTopRight > 0){
        document.querySelector("#screen").innerHTML += "Border Radius Top right: " + borderTopRight + "<br>"
    }

}

function changeValueBottomLeft() {
var borderBottomLeft = Number(document.querySelector("#input-bottom-left").value)
    document.querySelector("#content").style.borderBottomLeftRadius = borderBottomLeft + "px"

    if(borderBottomLeft > 0){
        document.querySelector("#screen").innerHTML += "Border Radius Bottom Left: " + borderBottomLeft + "<br>"
    }
}

function changeValueBottomRight() {
var borderBottomRight = Number(document.querySelector("#input-bottom-right").value)
     document.querySelector("#content").style.borderBottomRightRadius = borderBottomRight + "px"

     if(borderBottomRight > 0){
        document.querySelector("#screen").innerHTML += "Border Radius Bottom Right: " + borderBottomRight + "<br>"
    }
}

function clean() {
//Limpar a tela
document.querySelector("#screen").innerHTML = ""

document.querySelector("#content").style.borderRadius = 0

//Limpar o valor do input
document.querySelector("#input-top-left").value = 0
document.querySelector("#input-top-right").value = 0
document.querySelector("#input-bottom-left").value = 0
document.querySelector("#input-bottom-right").value = 0
}

