import { personalInfoControllerObj } from "../../mvc/Controller/personal-info/personal-info.controller.js";


window.onload = () => {
  personalInfoControllerObj.run()
  $('.personal__list-input').keyup((e)=>personalInfoControllerObj.changeHandler(e))
  $('#add-user-photo').change((e)=>personalInfoControllerObj.changeHandler(e))
  $('#clear-user-photo').click(()=>personalInfoControllerObj.clearPhotoHandler())
  $('#personal-info-save').click(()=>personalInfoControllerObj.confirmInput())
  $('#personal-info-cancel').click(()=>personalInfoControllerObj.cancelUpdate())
  $('#update-close-btn-id').click(()=>personalInfoControllerObj.closeModalHanlder())


}


