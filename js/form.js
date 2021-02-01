var fields={};
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('nome');
    fields.lastName = document.getElementById('cognome');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('indirizzo');
    fields.country = document.getElementById('nazione');
    fields.question = document.getElementById('domanda');
   })
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }
   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
   function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
   }
   function isValid() {
    var valid = true;
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
    return valid;
   }
   class User {
    constructor(firstName, lastName, address, country, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.country = country;
    this.email = email;
    this.question = question;
    }
   }
   function invia() {
    if (isValid()) {
    let usr = new User(nome.value, cognome.value, indirizzo.value, nazione.value, email.value);
   
    alert(`${usr.firstName} La tua domanda è stata inviata correttamente`)
   
    } else {
    alert("Controlla che i dati inseriti siano corretti")
    }
   }