class Service {

    validateName(name = "") {
        let nameValidationRegExp = new RegExp(/^[a-zA-Z].{2,128}$/, 'i');
        return nameValidationRegExp.test(name);
    }

    validateSurname(surname = "") {
        let surnameValidationRegExp = new RegExp(/^[a-zA-Z].{2,256}$/, 'i');
        return surnameValidationRegExp.test(surname);
    }

    validateAddress(address = "") {
        let addressValidationRegExp = new RegExp(/^.{5,256}$/, 'i');
        return addressValidationRegExp.test(address);
    }

    validateSpanishPostCode(cp="") {
        let cpValidationRegExp = new RegExp(/^\d{5}$/, 'i');
        return cpValidationRegExp.test(cp);
    }

    validateEEUUPostCode(cp="") {
        let cpValidationRegExp = new RegExp(/^[\d]{5}-[\d]{4}$/, 'i');
        return cpValidationRegExp.test(cp);
    }

    validateSpanishLandLine(landline=""){
        let landlineValidationRegExp = new RegExp(/^(0034)?(\+34)?[8|9]{1}[\d]{8}$/, 'i');
        return landlineValidationRegExp.test(landline);
    }
    validateEEUULandLine(landline=""){
        let landlineValidationRegExp = new RegExp(/^\([\d]{3}\)[\d]{3}-[\d]{4}$/, 'i');
        return landlineValidationRegExp.test(landline);
    }

    validateSpanishMobilePhone(phone=""){
        let mobileValidationRegExp = new RegExp(/^((\+34)([\d]{9}))$|^((0034)[\d]{9})$|^[^0034][^+34]([\d]{7})$/, 'i');
        return mobileValidationRegExp.test(phone);
    }

    validateEEUUMobilePhone(phone=""){
        let mobileValidationRegExp = new RegExp(/^(\+)?[\d]{1}-[\d]{3}-[\d]{3}-[\d]{4}$/, 'i');
        return mobileValidationRegExp.test(phone);
    }

    validateEmail(email=""){
        let emailValidationRegExp = new RegExp(/^[\w!#$%&'*+-/=?^_`{|}~]{2,256}@[\w!#$%&'*+-/=?^_`{|}~]{2,256}\.[a-z]{2,25}$/, 'i');
        return emailValidationRegExp.test(email);
    }

    validateSpanishBirthDate(date=""){
        let dateValidationRegExp = new RegExp(/^([0][1-9]|[2-3][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)([1][9][0-9][0-9]|[2][0][0-1][0-9])$/, 'i');
        return dateValidationRegExp.test(date);
    }

    validateEEUUBirthDate(date=""){
        let dateValidationRegExp = new RegExp(/^(((0)[1-9])|((1)[0-2]))(\/)([0][1-9]|[1-2][0-9]|(3)[0-1])(\/)([1][9][0-9][0-9]|[2][0][0-1][0-9])$/, 'i');
        return dateValidationRegExp.test(date);
    }


}

//let ser = new Service();
//console.log(ser.validateSpanishLandLine("0034952258878"));