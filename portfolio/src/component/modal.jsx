function closeModal() {
  let modalContainer = document.getElementById("modal-container");
  modalContainer.classList.remove("show-modal");
}

function Modal() {
  return (
    <div className="modal__container" id="modal-container">
      <div className="modal__content">
        <div className="modal__close close-modal" title="Close">
          <i className="bx bx-x"></i>
        </div>
        <h1 className="modal__title">Hello!</h1>
        <p className="modal__description">
          Select any link to go to that project
        </p>
        <a href="../../../doge-clicker">
          <h3>Doge Clicker</h3>
        </a>
        <a href="../../../quotifier">
          <h3>Quotifier</h3>
        </a>
        <a href="../../../snake">
          <h3>Snake</h3>
        </a>
        <a href="../../../TicTacToe/3x3">
          <h3>TicTacToe</h3>
        </a>

        <button onClick={closeModal} className="modal__button-link close-modal">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
