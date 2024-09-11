// CONSTRUCTOR DE LOS TOURS
class Tour {
    constructor(nombre,valor,ticket, inicio, fin, incluye, descripcion){
        this.nombre = nombre;
        this.valor = Number(valor);
        this.ticket = Number(ticket);
        this.inicio = inicio;
        this.fin = fin;
        this.incluye = incluye;
        this.descripcion = descripcion;
    }
    
    // Breve descripcion de los tours 
    textoInformacion(){
        alert("Tour "+this.nombre+"\n-Valor por persona: $"+ this.valor.toString() +"clp\n-Valor ticket por persona: $"+ this.ticket.toString() +"clp\n-Horario:\n"+this.inicio+"\n"+this.fin+"\n-Incluye "+ this.incluye+"\n"+this.descripcion);
    }

    // METODO PARA CALCULAR COTIZACION FINAL
    cotizar(grupo){
        let venta = prompt(`Si desea agregar ${this.nombre.toUpperCase()} al carrito de compra marque '+', de lo contrario marque '-'\nPrecio tour:  $${this.valor}\nPrecio ticket: $${this.ticket}`);
        validacionVenta(venta,grupo,this.nombre,this.valor,this.ticket)
    }
}
    
class PerfilUsuario {
    constructor (nombre,usuario,clave){
        this.usuario = usuario;
        this.clave = clave;
        this.nombre = nombre;
        this.canastas = [];      
    }
}

// REGISTRO DE USUARIO
function registroUsuario(nombre,usuario,clave){
    const perfil = new PerfilUsuario(nombre,usuario,clave);
    registrados.push(perfil);
}




// Funcion de la Opcion 1 del Menu, INFORMACION DE TOURS
function opcionInformacion(){
    let flags = true;
    while (flags){
        let opcionTour = prompt(`Para mas informacion de los Tours, marca:\n1. ${tour1.nombre}\n2.  ${tour2.nombre} \n3.  ${tour3.nombre}\n4. ${tour4.nombre}\n5. ${tour5.nombre}\n6. Para volver al menu`);
        
        switch (opcionTour){
            case '1':
                tour1.textoInformacion();
                break;
            case '2':
                tour2.textoInformacion();
                break;
            case '3':
                tour3.textoInformacion();
                break;
            case '4':
                tour4.textoInformacion();
                break;
            case '5':
                tour5.textoInformacion();
                break;
            case '6':
                flags = false;
                break;
            default:
                alert("Ingrese opcion valida");
                opcionTour = prompt(`Para mas informacion de los Tours, marca:\n1. ${tour1.nombre}\n2.  ${tour2.nombre} \n3.  ${tour3.nombre}\n4. ${tour4.nombre}\n5. ${tour5.nombre}\n6. Para volver al menu`);
                break;
        }

    }
}

// REGISTRO DEL NOMBRE A USUARIO NUEVO
function nombreValido() {
    let flags = true;
    let nombre = '';
    while (flags){
        nombre= prompt('Ingrese su nombre').trim();
        flags = false;
        if (nombre !== ''){
            for(let caracter of nombre ){
                if(!isNaN(caracter) && caracter!==' '){
                    alert('Ingrese nombre valido, sin numeros');
                    flags = true;
                    break;
                }
    
            }
        }
        else{
            flags = true;   
            alert('Ingrese nombre valido, sin numeros');
        }
        
    }
    return nombre
}

// REGISTRO DEL NOMBRE DE USUARIO A USUARIO NUEVO
function usuarioValido(){
    let flags = true;
    let usuario = '';
    while (flags){
        usuario= prompt('Ingrese nombre usuario').trim();
        if(registrados.some( registrado => registrado.usuario === usuario) || usuario.toLocaleUpperCase() === 'ADMIN'){
            alert('Este usuario ya existe');
        }
        else if( usuario.length<=3){
            alert('Ingrese nombre de usuario valido, mas de tres caracteres');
        }
        else{
            flags = false;
        }
    }
    return nombre
}

// REGISTRO DE CALVE DE USUARIO A USUARIO NUEVO
function ValidacionClave(){
    let flags = true;
    let clave1 = '';
    let clave2 = '';
    while (flags){
        clave1= prompt('Ingrese contraseña nueva de al menos 4 caracteres.');
        if (clave1.length>3) {
            clave2= prompt('Ingrese contraseña nuevamente');
            if(clave1 === clave2){
                alert('Contraseña guardada correctamente');
                flags = false;
            }
            else{
                alert('Contraseñas no coinciden, intenta nuevamente');
            }  
        }
        else{
            alert('Contraseña demasiado corta, intente nuevamente');
        }
    }
    return clave1

}

// 
function menuNavegacion() {
    let nav = prompt("Marca:\n1. Para mas informacion de nuestros servicios\n2. Para realizar una cotizacion \n3. Terminar interaccion");
    return nav
}


// VERIFICACION DE NUMBER
function verificacionNumber(cntGrupo){
    while (isNaN(cntGrupo) || cntGrupo <= 0){
        alert('Ingrese dato numerico valido')
        cntGrupo = Number(prompt('Ingrese cantidad de pasajeros'))
    }
}

// VERIFICACION DE NOMBRE
function validacionNombre(nombreUsuario){
    while ( nombreUsuario.trim() === "" || nombreUsuario.length <3){
        alert('Ingrese nombre valido')
        nombreUsuario=prompt('Para iniciar proceso de cotizacion indique nombre de usuario');
    }
}

// Funcion validacion para opcion de compra y acciones
function validacionVenta(venta,grupo,nombreTour,precioTour,precioTicket){
    flags = true;
    while (flags){
        if (venta=='+'){
            cantidadTour++
            total_ticket += (precioTicket)*grupo;
            total_tour += (precioTour)*grupo;
            total += (precioTicket + precioTour)*grupo;
            flags = false;
        }
        else if (venta=='-'){
            flags = false;
        }
        else{
            alert('Escriba opcion valida')
            venta = prompt(`Si desea agregar ${nombreTour} al carrito de compra marque '+', de lo contrario marque '-'\nPrecio tour:  $${precioTour}\nPrecio ticket: $${precioTicket} `);
        }
    }
}

// DESCRIPCIONES DE LOS TOURS 
const descripcionGeiser = "El Géiser del Tatio es una maravilla natural situada en los Andes, a más de 4.300 metros sobre el nivel del mar. Este campo geotérmico es conocido por sus impresionantes fumarolas que emergen al amanecer, creando un espectáculo de vapor y luz en medio de un paisaje montañoso. Es un lugar ideal para experimentar la fuerza y ​​la belleza de la naturaleza en su máxima expresión, ofreciendo a los visitantes una experiencia única en un entorno remoto y espectacular.";
const descripcionValleLuna = "El Valle de la Luna, ubicado en el corazón del Desierto de Atacama, es un destino que parece de otro mundo. Sus formaciones rocosas, moldeadas por el viento y el agua durante millas de años, crean un paisaje que recuerda la superficie lunar. Al caer la tarde, el valle se tiñe de colores dorados y rosados, ofreciendo una vista inolvidable. Es un lugar perfecto para los amantes de la naturaleza y la fotografía, donde cada rincón revela la majestuosidad del desierto.";
const descripcionCejar = "La Laguna Cejar es famosa por sus aguas hipersalinas que permiten a los visitantes flotar con facilidad. Rodeada por el impresionante paisaje del Salar de Atacama, esta laguna de color turquesa es un oasis en medio del desierto. Además de su belleza natural, la laguna es hogar de flamencos y otras especies de aves, lo que la convierte en un lugar ideal para relajarse y disfrutar de la naturaleza en su estado más puro.";
const descripcionPiedrasRojas = "Las Piedras Rojas, con su vibrante color rojizo, y las Lagunas Altiplánicas, ubicadas a gran altitud, son destinos imprescindibles en San Pedro de Atacama. Este tour te lleva a explorar un paisaje de contrastes, donde el rojo intenso de las piedras se mezcla con el azul profundo de las lagunas. Rodeadas por montañas y volcanes, estas lagunas ofrecen una vista espectacular y son un refugio para una variedad de fauna andina, como flamencos y vicuñas.";
const descripcionAstro = " El cielo de San Pedro de Atacama es mundialmente conocido por su claridad y nitidez, lo que lo convierte en un lugar privilegiado para la observación astronómica. Durante el recorrido astronómico, los visitantes tienen la oportunidad de explorar el cosmos a través de potentes telescopios, observando estrellas, planetas y galaxias con una claridad impresionante. Guiado por expertos, este tour ofrece una experiencia educativa y fascinante, conectando a los participantes con los misterios del universo bajo uno de los cielos más despejados del mundo.";

// CONSTRUCTOR TOUR, PARA CREAR OBJETOS CONRESPECTOS A LOS TOURS
const tour1 = new Tour("Geiser del Tatio",30000,15000, "Entre 4.30-5.15hrs, recogida en el hostal", "12.00hrs, en el centro del pueblo", "Desayuno",descripcionGeiser );
const tour2 = new Tour("Valle de la Luna",25000,10800, "14.20, en la agencia (centro del pueblo)", "18.30hrs, en el centro del pueblo", "Cocktail", descripcionValleLuna);
const tour3 = new Tour("Laguna Cejar",25000,20000, "14.20, en la agencia (centro del pueblo)", "18.30hrs, en el centro del pueblo", "Cocktail", descripcionCejar);
const tour4 = new Tour("Piedras Rojas",55000,18000, "Entre 6.30-7.15hrs, recogida en el hostal", "16.30hrs, en el centro del pueblo", "Desayuno y Almuerzo", descripcionPiedrasRojas);
const tour5 = new Tour("Astronomico",20000,0, "20.20, en la agencia (centro del pueblo)", "23.30-00.00hrs, se deja a cada pasajero en su hostal", "Cocktail y Astrofotografias", descripcionAstro);
// LISTA DE TOURS DISPONIBLES
const toursDisponibles= [tour1,tour2,tour3,tour4,tour5];


// VARIABLES GLOBALES
const registrados = [{usuario: 'oskbritoo'}];
let cantidadTour = 0;
let total_ticket = 0;
let total_tour = 0;
let total = 0;



// SOLO PALABRA CLAVE DEL ADMIN PUEDE TERMINAR EL PROGRAMA
let flagsAdmin =true;


let usuario = '';
let nombre = '';
let clave = '';

while (flagsAdmin){

    // Inicio de interaccion de usuario 
    usuario = prompt('Ingrese usuario de viajero para iniciar sesion\n\nPara crear nuevo usuario ingrese "REGISTRARME"').trim();

    //INGRESO Navegacion de usuario
    if (registrados.some( registrado => registrado.usuario === usuario)) {
        const usuarioIniciado = registrados.find( registrado=> registrado.usuario===usuario);

        for(let i = 0;i<=2;i++){

            clave = prompt(`Ingrese su contraseña\n\nTiene ${3-i} intentos`);
            let opcionMenu = ''
            if (usuarioIniciado.clave === clave){
                alert(`Hola ${usuarioIniciado.nombre}! Bienvenido a EXPEDICIONES CHAJNANTOR, agencia touroperadora de san Pedro de Atacama.`);

                opcionMenu = menuNavegacion();

                let flagsOpcion = true;
                while (flagsOpcion){
                        
                    opcionMenu = menuNavegacion();

                    switch (opcionMenu.trim()){
                        // OPCION 1 INFORMACION TURISTICA
                        case '1':
                            opcionInformacion();
                            break;

                        // OCPIONA 2 COTIZAR
                        case '2':
                            cantidadTour = 0;
                            total_ticket = 0;
                            total_tour = 0;
                            total = 0;
                            cntGrupo = Number(prompt('Ingrese cantidad de pasajeros'));
                            verificacionNumber(cntGrupo);
                            tour1.cotizar(cntGrupo);
                            tour2.cotizar(cntGrupo);
                            tour3.cotizar(cntGrupo);
                            tour4.cotizar(cntGrupo);
                            tour5.cotizar(cntGrupo);
                            alert(`Por la compra de los ${cantidadTour} tour seleccionados, para ${cntGrupo} personas:\nPrecio servicio Tour: $${total_tour}\nPrecio Tickets de los Parques: $${total_ticket}\nTotal: $${total}`);
                            break;

                        // OPCION 3 TERMINAR SESION
                        case '3':
                            flagsOpcion = false;
                            break;

                        // OPCION CUANDO INGRESAN OPCION INVALIDA
                        default:
                            alert('Ingrese opcion valida')
                            opcionMenu = menuNavegacion();
                            break;
                    }
                }
                alert('Sesion finalizada, hasta pronto!');
                break;
            }
            else{
                alert('Contraseña incorrecta, vuelve a intentarlo')
            }

        }
    }

    // REGISTRO USUARIO NUEVO
    else if ( usuario.toUpperCase() == "REGISTRARME"){
        alert('A continuacion te pediremos datos para rellenar tu perfil de viajero');
        
        nombre = nombreValido();
        usuario = usuarioValido();
        clave = ValidacionClave();
        registroUsuario(nombre,usuario,clave);
        console.log(registrados);
    }

    // fIN DEL PROGRAMA POR ADMIN
    else if (usuario == 'admin'){
        clave = prompt('Ingrese clave');
        if(clave == '1234'){
            flagsAdmin = false;
            alert('Programa finalizado por Admin\n\nSe imprimira por consola resumen del programa')
        }
        else{
            alert('clave incorrecta')
        }
        
    }

    // USUARIO INVALIDO
    else{
        alert('Usuario no existente, intente nuevamente')
    }
}
