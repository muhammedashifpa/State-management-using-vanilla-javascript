

class personalInfoModal{
    constructor(firstName, lastName, email, phone, profilePhoto){
        this.personalInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            profilePhoto: profilePhoto
        }
    }

    get getPersonalInfo (){
        return this.personalInfo
    }
    
    set setPersonalInfo (val){
        this.personalInfo = {
            ...val
        }
    }
}

export const fetchInitialData = () => ({
    firstName:'John',
    lastName:'Brown',
    email:'john.brown@gmail.com',
    phone:'',
    profilePhoto: 'assets/img/avatar-placeholder.png'
})

export const personalInfoModalObj = new personalInfoModal()

export const loadMVC = (val) => {
    personalInfoModalObj.setPersonalInfo = val
}