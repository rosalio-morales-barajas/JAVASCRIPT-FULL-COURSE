
function calcularPrecio(cantidad, precio, impuesto){
    let subTotal = cantidad * precio;
    let total = subTotal + (subTotal * impuesto);
    return total;
}


function calcularSubtotal(cantidad, precio){
    return cantidad * precio;
}

function calcularTotal(subTotal, iva){
    return subTotal * (subTotal * iva);
}

