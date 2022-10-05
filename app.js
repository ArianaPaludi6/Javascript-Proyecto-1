//PROYECTO 1


let carrito = 0;

function compras (){

    for(let i = 0; i <= 5; i++){
        let valor = prompt("Ingrese 5 productos. " + "Tienes " + i + " intentos")
        if(i === 5){
            alert("te quedaste sin intentos")
        }

        switch(valor){
            case "oreo de dulce de leche":
            carrito = carrito + 5500
            alert("tienes en el carrito $" + carrito)
            break;
            case "lasagna de chocolate":
            carrito = carrito + 4900
            alert("tienes en el carrito $" + carrito)
            break
            case "chocotorta choco":
            carrito = carrito + 3900
            alert("tienes en el carrito $" + carrito)
            break
            default:
                alert(valor + " no es valido")
        }
    
    }
   
}

compras();