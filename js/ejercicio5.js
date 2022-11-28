window.onload = iniciar;

function iniciar(){
    var btnCalcular = document.getElementById("btnCalcular");
   btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){
    var txtEdad = document.getElementById("txtEdad");
    var edad = txtEdad.value;
    alert(edad);

    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
    alert(peso)

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
    alert(altura)    

    var imc = peso / (altura * altura);
    alert(imc);
    if(edad < 45){
        if(imc < 22){
            alert("tu indice de masa corporal es bajo:");
        }else if(imc >= 22){
            alert("tu indice de masa corporal es medio:");
        }
    }else if(edad >= 45){
        if(imc < 22){
            alert("tu indice de masa corporal es medio:");
        }else if(imc >= 22){
            alert("tu indice de masa corporal es alto:");
        }
        
    }
}
