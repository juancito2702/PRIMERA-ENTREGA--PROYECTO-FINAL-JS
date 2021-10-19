 //---------------------------VARIABLES GENERALES- TIENDA DE ADHESIVOS------------------------------------
//Precios de Los Ahdesivos.
const sikaFlexPrice = 32;
const soudalFixAllPrice = 41;
const TopexPoliuretanoPrice = 50;
const sikaMaxTac227Price = 20;
const soldimixExtremePrice = 27;
const sikaBommEspumaPrice = 62;

//Stock en mi Almacén.
let sikaFlexStock = 100;
let soudalFixAllStock = 100;
let TopexPoliuretanoStock = 90;
let sikaMaxTac227Stock = 100;
let soldimixExtremeStock = 200;
let sikaBommEspumaStock = 50;


//Varaibles Generales
let unidadesAComprar = 0; //cantidad elegida por el usuario
let total = 0; //precio total que pagará el usuario
let respuesta = `s`;


//Variable para mi Menú de Adhesivos.

const nemuDeOpciones = `Por favor, selecciona el Adhesivo que deseas comprar:
1. *Sika Flex 11 Fc.
2. *Soudal Fix All.
3. *Topex Poliuretano.
4. *Sika Max Tac 227
5. *Soldimix Extreme.
6. *Sika Boom Espuma.
7. *Salir
`;

const seleccionDeCantidad = `¿Cuántas unidades te gustaría Adquirír?`;

//--------------------------------------------------------------------------------------------------


//FUNCIONES GENERALES DE MI PROYECTO DE ADHESIVOS---------------------------------------------

//disponibleStock: es para saber si tenemos Stock de Siliconas suficientes para poder vender
//cantidad: es lo que el cliente desea comprar.
//stock: Es nuestro almacén de Adhesivos.


const disponibleStock = (cantidad, stock) => {
    if (cantidad > stock){
        alert("Actualmente, sólo contamos con: " + stock + " Unidades");
        return false;
    }   
    else return true;
}



//ES EL CARRITO DE COMPRAS DEL USUARIO POR LOS ADHESIVOS............................................

const carrito = (option,uni) =>{
    switch(option){
        case 1:
            if(disponibleStock(uni,sikaFlexStock)){
                total += (uni * sikaFlexPrice);  //variable acumuladora total +=
                sikaFlexStock = sikaFlexStock - uni; //también puede ser: sikaFlexStock -=
                alert("Sikaflex 11 Fc fué agregado con éxito a tu carrito.");
            }
            break;

        case 2:
            if(disponibleStock(uni,soudalFixAllStock)){
                total += (uni * soudalFixAllPrice);  //variable acumuladora total +=
                soudalFixAllStock = soudalFixAllStock - uni; 
                alert ("Soudal Fix All fué agregado con éxito a tu carrito.");
            }
            break

        case 3:
            if(disponibleStock(uni,TopexPoliuretanoStock)){
                total += (uni * TopexPoliuretanoPrice);  //variable acumuladora total +=
                TopexPoliuretanoStock = TopexPoliuretanoStock - uni; 
                alert ("Topex Poliuretano fué agregado con éxito a tu carrito.");
            }
            break              
        
        case 4:
            if(disponibleStock(uni,sikaMaxTac227Stock)){
                total += (uni * sikaMaxTac227Price);  //variable acumuladora total +=
                sikaMaxTac227Stock = sikaMaxTac227Stock - uni; 
                alert ("Sika Max Tac 227 fué agregado con éxito a tu carrito.");
            }
            break       

        case 5:
            if(disponibleStock(uni,soldimixExtremeStock)){
                total += (uni * soldimixExtremePrice);  //variable acumuladora total +=
                soldimixExtremeStock = soldimixExtremeStock - uni; 
                alert ("Soldimix Extreme fué agregado con éxito a tu carrito.");
            }
            break

        case 6:
            if(disponibleStock(uni,sikaBommEspumaStock)){
                total += (uni * sikaBommEspumaPrice);  //variable acumuladora total +=
                sikaBommEspumaStock = sikaBommEspumaStock - uni; 
                alert ("SikaBoom Espuma fué agregado con éxito a tu carrito.");
            }
            break
            
        default:    
            alert("Opción incorrecta, por favor verificar las opciones.")
    }
}





 //Juan Luis Silva - Primera entrega del Proyecto final.

//Archivo Principal para el Desarrollo de mi Tienda Online "Adhesivos Juancito".


//----------------------MÉTODO PARA DEVOLVER EL SALUDO INICIAL EN MAYÚSCULAS........................

let saludoInicial=prompt("Bienvenido a tu tienda Online: 'Adhesivos Juancito', como te llamas?")

let textoenMayuscula= saludoInicial.toUpperCase();
   alert("Un gusto saludarte" +" "+ textoenMayuscula);

do{  
    let option =parseInt(prompt(nemuDeOpciones));
    if(option === 7) break; // opción 7 es para salír 
    let unidadesAComprar = parseInt(prompt(seleccionDeCantidad));

    carrito(option,unidadesAComprar)

    respuesta = prompt(`¿Te gustaría agregar más productos a tu carrito de compras? s/n`);

}while(respuesta === `s` || respuesta === `S`); 

if (total !=0){
    alert (`El total a pagar por tus Productos sellecionados es: ${total} Soles`);
};

    alert("Te invito a que que puedas decirme tu adhesivo ideal:")


//MI FUNCIÓN DE ADHESIVO...............................................................................................................

function Adhesivo (marca, color, textura, precio){
      this.marca = marca;
      this.color = color;
      this.textura = textura;
      this.precio = precio;
}


//PROPIEDADED DE MI OBJETO............................................................................................................

let laMarca=prompt("Por favor ingresa la Marca del Adhesivo que deseas comprar:");
let elColor=prompt("Ahora, ingresa el Color que deseas en el Ahdesivo:");
let laTextura=prompt("También, ingresa la textura que buscas en el Adhesivo:");

let miAdhesivoIdeal = new Adhesivo(laMarca, elColor, laTextura);
alert("El Adhesivo que estás buscando es: "+ miAdhesivoIdeal.marca+" "+ miAdhesivoIdeal.color+" "+ miAdhesivoIdeal.textura+ "\n");




//EL HORARIO DE ATENCIÓN  DE MI TIENDA ONLINE.........................................................................................
//EL HORARIO DE MI TIENDA DE ADHESIVOS ES: 7:00 AM A 11:00 AM Y DE 2:00 PM A 8:00 PM...................................................

alert("Te invito a conocer el Horario de Atención de mi tienda Online");


class miNegocio {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        
        if (((hora >= 7) && (hora <= 11)) || ((hora >= 14) && (hora <= 20))) {
            return true;
        } else {
            return false;
        }
    }
}

const local1 = new miNegocio("Tienda de Adhesivos Juancito", "Lima Perú", "Juan Silva", "Ferretería");
console.log(local1);


for (i = 1; i <= 3; i++) {
    let horarioDeAtencion = parseInt(prompt("Ingrese un horario para saber si estamos atendiendo: (Ingresar horario militar)"));
    let abierto = local1.estaAbierto(horarioDeAtencion); 
    if (abierto) {
        alert("Abierto..!!! Estamos a la orden..!!!");
    } else {
        alert("En estos momentos estamos cerrados, te esperamos en nuestro horario virtual de: 7:00 am a 11:00 am y de las 14:00 a las 20:00");
    }
}

alert(" DIOS TE BENDIGA =) Gracias por visitarnos.");

































