class Controller {
    constructor(view, model) {
        this.model = model;
        this.view = view;

        // Common binders
        this.view.bindName(this.handleName);
        this.view.bindSurName(this.handleSurname);
        this.view.bindAddress(this.handleAddress);
        this.view.bindEmail(this.handleEmail);
        this.view.bindCountry(this.handleCountry);


    }

    //Common handlers
    handleName = name => {
        return this.model.validateName(name);
    }
    handleSurname = surName => {
        return this.model.validateSurname(surName)
    }

    handleAddress = address => {
        return this.model.validateAddress(address)
    }

    handleEmail = email => {
        return this.model.validateEmail(email)
    }


    // Spanish handlers
    handleSpanishPostCode = postCode => {
        return this.model.validateSpanishPostCode(postCode)
    }
    handleSpanishLandLine = landLine => {
        return this.model.validateSpanishLandLine(landLine)
    }
    handleSpanishMobilePhone = mobilePhone => {
        return this.model.validateSpanishMobilePhone(mobilePhone)
    }
    handleSpanishBirthDate = birthDate => {
        return this.model.validateSpanishBirthDate(birthDate)
    }


    // EEUU handlers
    handleEEUUPostCode = postCode => {
        return this.model.validateEEUUPostCode(postCode)
    }

    handleEEUULandLine = landLine => {
        return this.model.validateEEUULandLine(landLine)
    }

    handleEEUUMobilePhone = mobilePhone => {
        return this.model.validateEEUUMobilePhone(mobilePhone)
    }
    
    handleEEUUBirthDate = birthDate => {
        return this.model.validateEEUUBirthDate(birthDate)
    }


    handleCountry = country => {
        if (country === "espana") {
            this.view.bindPostCode(this.handleSpanishPostCode);
            this.view.bindLandLine(this.handleSpanishLandLine);
            this.view.bindMobilePhone(this.handleSpanishMobilePhone);
            this.view.bindBirthDate(this.handleSpanishBirthDate);
            
        } else if (country === "EEUU") {
            this.view.bindPostCode(this.handleEEUUPostCode);
            this.view.bindLandLine(this.handleEEUULandLine);
            this.view.bindMobilePhone(this.handleEEUUMobilePhone);
            this.view.bindBirthDate(this.handleEEUUBirthDate);

        }

    }

/*
    handleCountry = country => {
        if (country === "espana") {
            handleSpanishPostCode = postCode => {
                return this.model.validateSpanishPostCode(postCode)
            }
            handleSpanishLandLine = landLine => {
                return this.model.validateSpanishLandLine(landLine)
            }
            handleSpanishMobilePhone = mobilePhone => {
                return this.model.validateSpanishMobilePhone(mobilePhone)
            }
            handleSpanishBirthDate = birthDate => {
                return this.model.validateSpanishBirthDate(birthDate)
            }
        } else if (country === "EEUU") {
            handleEEUUPostCode = postCode => {
                return this.model.validateEEUUPostCode(postCode)
            }

            handleEEUULandLine = landLine => {
                return this.model.validateEEUULandLine(landLine)
            }

            handleEEUUMobilePhone = mobilePhone => {
                return this.model.validateEEUUMobilePhone(mobilePhone)
            }
            handleEEUUBirthDate = birthDate => {
                return this.model.validateEEUUBirthDate(birthDate)
            }
        }

    }

*/







}