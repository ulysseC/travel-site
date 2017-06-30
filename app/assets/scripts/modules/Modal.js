import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }
  events(){
    //CLICKING THE OPEN MODAL
    this.openModalButton.click(this.openModal.bind(this));

    //CLICKING THE X CLOSE MODAL
    this.closeModalButton.click(this.closeModal.bind(this));
    //PUSHES any key
    $(document).keyup(this.keyPressHandler.bind(this));

  }
  keyPressHandler(e){
    if(e.keyCode ==27){
      this.closeModal();
    }
  }
  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
