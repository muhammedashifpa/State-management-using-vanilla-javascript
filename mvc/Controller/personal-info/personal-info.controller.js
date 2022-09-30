import { fetchInitialData,personalInfoModalObj } from "../../Model/personal-info/personal-info.modal.js";
import { personalInfoViewObj } from "../../View/personal-info/personal-info.view.js";

class personalInfoController {
    constructor() {
        this.initialData = fetchInitialData()
        personalInfoModalObj.setPersonalInfo = this.initialData
    }
    
    changeHandler = (e) =>{
        if (e.target.name === 'profilePhoto'){
            personalInfoViewObj.setUserData({
                ...personalInfoViewObj.userData,
                [e.target.name]:URL.createObjectURL(e.target.files[0])
            })
        }else{
            personalInfoViewObj.setUserData({
                ...personalInfoViewObj.userData,
                [e.target.name]:e.target.value
            })
            if(personalInfoViewObj.nameFieldError){
                this.validateData(personalInfoViewObj.userData) && personalInfoViewObj.setNameFieldError(false)
    
            }
        }
       
        // // close modal if it is not closed
        personalInfoViewObj.modalStatus && personalInfoViewObj.setModalStatus(false)
        !personalInfoViewObj.buttonStatus && personalInfoViewObj.changeButtonStatus(true)
    }
    //  Name validator
    validateData = (val) => {
        return (val.firstName == '' | val.lastName == '') ?  false :  true
    }

    confirmInput = () => {
        const isValid = this.validateData(personalInfoViewObj.userData)
        if (isValid){
            personalInfoModalObj.setPersonalInfo = personalInfoViewObj.userData
            personalInfoViewObj.changeButtonStatus(false)
            // personalInfoViewObj.setModalStatus(true)
            personalInfoViewObj.setNameFieldError(false)
        }else{
            personalInfoViewObj.setNameFieldError(true)
        }
    }
    // Close modal
    closeModalHanlder = () => {
        personalInfoViewObj.setModalStatus(false)
    }
    //clear photo handler
    clearPhotoHandler(){
        var confirm = window.confirm('Do you want to delete the photo?')
        if (confirm == true) personalInfoViewObj.clearPhoto()
    }

    // Cancel update
    cancelUpdate = () => {
        console.log(personalInfoModalObj.getPersonalInfo)
        personalInfoViewObj.setUserData(personalInfoModalObj.getPersonalInfo)
        personalInfoViewObj.changeButtonStatus(false)
        personalInfoViewObj.setModalStatus(false)
        personalInfoViewObj.setNameFieldError(false)
    }
    run(){
        personalInfoViewObj.setUserData(this.initialData)

    }

}

export const personalInfoControllerObj = new personalInfoController()

