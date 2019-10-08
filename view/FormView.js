class View {
    constructor() {
        this.nameInput = document.getElementById("name");
        this.surNameInput = document.getElementById("surname");
        this.addressInput = document.getElementById("address");
        this.postCodeInput=document.getElementById("postCode");
        this.landlineInput = document.getElementById("landline");
        this.mobilePhoneInput = document.getElementById("mobilePhone");
        this.emailInput = document.getElementById("email");
        this.birthDateInput = document.getElementById("birthDate");
        this.countryInput = document.getElementById("country")
        this.body=document.getElementById("general")

        this.arrayChecks=[]
        
        }

    getName() {
        return this.nameInput.value;
    }

    getSurname() {
        return this.surNameInput.value;
    }

    getAddress() {
        return this.addressInput.value;
    }
    getPostCode(){
        return this.postCodeInput.value;
    }

    getLandline() {
        return this.landlineInput.value;
    }
    getMobilePhone() {
        return this.mobilePhoneInput.value;
    }
    getEmail() {
        return this.emailInput.value;
    }
    getBirthDate() {
        return this.birthDateInput.value;
    }

    bindName(handler) {
        let check =document.getElementById("nameCheck")
        this.nameInput.addEventListener("keyup", event => {
            
            if (this.getName().length >= 3) {
                if(handler(this.getName())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[0]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[0]=false;
                } 

            }

            
            this.validateSendButton();
        })
    }

    bindSurName(handler) {
        let check =document.getElementById("surnameCheck")
        this.surNameInput.addEventListener("keyup", event => {
            if (this.getSurname().length >= 3) {
                if(handler(this.getSurname())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[1]=true;
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[1]=false
                } 

            }
            this.validateSendButton();
        })
    }

    bindAddress(handler) {
        let check =document.getElementById("addressCheck")
        this.addressInput.addEventListener("keyup", event => {
            if (this.getAddress().length >= 3) {
                if(handler(this.getAddress())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[2]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[2]=false;
                } 
            }
            this.validateSendButton();
        })
    }
    bindPostCode(handler) {
        let check =document.getElementById("postCodeCheck")
        this.postCodeInput.addEventListener("keyup", event => {
            if (this.getPostCode().length >= 3) {
                if(handler(this.getPostCode())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[3]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[3]=false;
                }
            } 
            this.validateSendButton();
        })
    }

    bindLandLine(handler) {
        let check =document.getElementById("landlineCheck")
        this.landlineInput.addEventListener("keyup", event => {
            if (this.getLandline().length >= 3) {
                if(handler(this.getLandline())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[4]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[4]=false;
                } 
            }
            this.validateSendButton();
        })
    }
    bindMobilePhone(handler) {
        let check =document.getElementById("mobilePhoneCheck")
        this.mobilePhoneInput.addEventListener("keyup", event => {
            if (this.getMobilePhone().length >= 3) {
                if(handler(this.getMobilePhone())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[5]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[5]=false;
                } 
            }
            this.validateSendButton();
        })
    }

    bindEmail(handler) {
        let check =document.getElementById("emailCheck")
        this.emailInput.addEventListener("keyup", event => {
            if (this.getEmail().length >= 3) {
                if(handler(this.getEmail())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[6]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[6]=false;
                } 
            }
            this.validateSendButton();
        })
    }
    bindBirthDate(handler) {
        let check =document.getElementById("birthDateCheck")
        this.birthDateInput.addEventListener("keyup", event => {
            if (this.getBirthDate().length >= 3) {
                if(handler(this.getBirthDate())) {
                    check.innerHTML='<span class="oi oi-check"></span>'
                    this.arrayChecks[7]=true
                } else{
                    check.innerHTML='<span class="oi oi-x"></span>'
                    this.arrayChecks[7]=false;
                } 
            }
            this.validateSendButton();
        })
    }


    bindCountry(handler) {
        this.countryInput.addEventListener("change", (event) => {
            event.preventDefault();
            let countries = document.getElementsByName("pais")
            let r = countries[0].checked ? countries[0].value : countries[1].value
            console.log(handler(r))

        })
    }

    validateSendButton(){
        if(this.arrayChecks.includes(undefined)||this.arrayChecks.includes(false)||this.arrayChecks.length!=8){
            $('#sendBtn').prop('disabled', true);
        }else{
            $('#sendBtn').prop('disabled', false);
        }
        
    }

    




}
