//TODO: Validacion de nombre, cedula, telefono y correo electronico

function validationName(){
    
    const caracterPermited = new RegExp(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/);
    const caracterNotPermited = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]?[-a-e-i-o]/gi, '');
    let names = prompt('Ingrese su nombre');
    const name = names;
    
    if(name.length !== 0){
        if (name == null || caracterPermited.test(name)) { //! Validacion de nombre correctamente
            console.log(name + ' es valido')
        } else {
            caracterNotPermited.test(); //! Validacion de caracteres no permitidos
            console.log('El nombre ingresado no es valido, intentelo de nuevo');
        } 
    } else {
        name.length === 0;
        alert('No ingreso ningun nombre, ingrese uno');
        location.reload(0); //! Recarga la pagina en caso de no colocar nombre
    }
}
validationName();

function validationCredentials(){

    const letra = 'V-';
    const caracterPermited = new RegExp(/^[0-9\.]{5,10}$/);
    const caracterNotPermited = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]?[-a-e-i-o][A-ZÁÉÍÓÚ][a-zñáéíóú]/gi, '')
    let numbers = prompt('Ingrese su Cedula');
    const number = numbers;

    if (number.length !== 0) {
        if (number == null || caracterPermited.test(number)) { //! Validacion de cedula correctamente
            console.log(letra + '' + number + ' es valido')
        } else {
            caracterNotPermited.test(); //! Validacion de caracteres no permitidos
            console.log('La cedula ingresada no es valida, intentelo de nuevo');
        }
    } else {
        number.length === 0;
        alert('No ingreso ninguna cedula, ingrese una');
        location.reload(0); //! Recarga la pagina en caso de no colocar cedula
    }
}
validationCredentials();

function validationPhone(){
    const caracterPermited = new RegExp(/^\d{4}-\d{3}-\d{4}$/);
    let phones = prompt('Ingrese su telefono');
    const phone = phones;

    if (phone.length !== 0) {
        if (phone == null || caracterPermited.test(phone)) { //! Validacion de telefono correctamente
            console.log(phone + ' es valido')
        } else {
            console.log('El telefono ingresado no es valido, intentelo de nuevo');
        }
    } else {
        phone.length === 0;
        alert('No ingreso ningun telefono, ingrese uno');
        location.reload(0); //! Recarga la pagina en caso de no colocar telefono
    }
}
validationPhone();

function validationEmail(){
    const caracterPermited = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/);
    let emails = prompt('Ingrese su correo electronico');
    const email = emails;

    if (email.length !== 0) {
        if (email == null || caracterPermited.test(email)) { //! Validacion de correo electronico correctamente
            console.log(email + ' es valido')
        } else {
            console.log('El correo electronico ingresado no es valido, intentelo de nuevo');
        }
    } else {
        email.length === 0;
        alert('No ingreso ningun correo electronico, ingrese uno');
        location.reload(0); //! Recarga la pagina en caso de no colocar correo electronico
    }
}
validationEmail();