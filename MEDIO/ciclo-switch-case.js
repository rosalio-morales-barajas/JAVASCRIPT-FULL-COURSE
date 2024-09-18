

let dia = 1;
let nombreDia = "";

/* switch(dia){
    case 1:
        console.log("Hoy es lunes...");
        break;
    case 2:
        console.log("Hoy es martes...");
        break;
    case 3:
        console.log("Hoy es miercoles...");
        break;
    case 4:
        console.log("Hoy es jueves...");
        break;
    case 5:
        console.log("Hoy es viernes....");
            break;
    case 6:
        console.log("Hoy es sabado....");
    case 7:
        console.log("Hoy es domingo...");
            break;
    default:
        console.log("Ingrese un numero entre 1 y 7....");                              
}    */

        switch(dia){
            case 1:
                nombreDia = "lunes";
                break;
            case 2:
                nombreDia = "martes";
                break;
            case 3:
                nombreDia = "miercoles";
                break;
            case 4:
                nombreDia = "jueves";
                break;
            case 5:
                nombreDia = "viernes";
                    break;
            case 6:
                nombreDia = "sabado";
            case 7:
                nombreDia = "domingo";
                    break;
            default:
                nombreDia = "Ingrese u n numero entre 1 y 7";                              
        }
        
console.log(nombreDia);