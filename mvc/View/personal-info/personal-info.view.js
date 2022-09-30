

class personalInfoView{
    constructor(firstNameValue='',lastNameValue='',emailValue='',profilePhoto='assets/img/avatar-placeholder.png'){
        this.buttonStatus = false
        this.modalStatus = false
        this.nameFieldError = false


        this.cancelButton =   document.getElementById('personal-info-cancel')
        this.saveButton =   document.getElementById('personal-info-save')
        this.nameErrorElement =   document.getElementById('error-name-id')
        this.modalUpdatedElement = document.getElementById('modal-updated')
        this.imageElement = document.getElementById('new-profile-photo')

        this.userData = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            email:  emailValue,
            profilePhoto: profilePhoto

        }
        this.firstNameField =  document.getElementById('personal-input-firstname-id')
        this.lastNameField = document.getElementById('personal-input-lastname-id')
        this.emailField = document.getElementById('personal-email-input')
        this.phoneField = document.getElementById('personal-tel-input')
        this.imageInputField = document.getElementById('add-user-photo')
    }


    changeButtonStatus(val){
        this.buttonStatus = val
        this.reRender()
    }
    setModalStatus(val){
        this.modalStatus = val
        this.reRender()
    }
    setNameFieldError (val){
        this.nameFieldError = val
        this.reRender()
    }
    setUserData (val){
        this.userData = {
            ...val
        }
        this.reRender()
    }
    setModalStatus(val){
        this.modalStatus = val
        this.reRender()
    }

    clearPhoto(){
        this.userData ={
            ...this.userData,
            profilePhoto: 'assets/img/avatar-placeholder.png'
        }
        this.reRender()
    }

    reRender(){
        //Enable disable button status
        if (this.buttonStatus){
            this.cancelButton.classList.remove('disabled')
            this.saveButton.classList.remove('disabled')
        }else{
            this.cancelButton.classList.add('disabled')
            this.saveButton.classList.add('disabled')
        }
        //enable disable name field error
        if(this.nameFieldError){
            this.nameErrorElement.classList.remove('d-none')
        }else{
            this.nameErrorElement.classList.add('d-none')
        }
        if(this.modalStatus){
            this.modalUpdatedElement.classList.remove('d-none')
        }else(
            this.modalUpdatedElement.classList.add('d-none')
        )

        
        //set value for input
        this.firstNameField.value = this.userData.firstName
        this.lastNameField.value = this.userData.lastName
        this.emailField.value = this.userData.email
        this.phoneField.value = this.userData.phone
        this.imageElement.src = this.userData.profilePhoto
    }
}


export const personalInfoViewObj =  new personalInfoView()
