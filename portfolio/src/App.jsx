//import { useState } from "react";
import logo from "./assets/logo.png";
import imgLogo from "./assets/imakegamezlogo.png";
import "./App.css";
import Modal from "./component/modal";

function openModal() {
  let modalContainer = document.getElementById("modal-container");
  modalContainer.classList.add("show-modal");
}

function App() {
  return (
    <>
      <div className="links">
        <a href="https://imakegamez.com/doge-clicker" target="_blank">
          <img src={imgLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/I-make-gamez" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button
        id="open-modal"
        onClick={openModal}
        className="projects modal__button"
      >
        Click to see my projects
      </button>
      <h1>I Make Gamez</h1>
      <div className="card">
        <p>
          Hey there! I'm NitTwit, a passionate developer with a knack for
          crafting Discord bots and diving into the world of front-end
          development. My journey in coding began with a simple idea - to bring
          innovative solutions and interactive experiences to life. With a love
          for Discord communities and an eye for user-friendly web interfaces,
          I've honed my skills to make your online spaces more engaging and
          efficient. When I'm not immersed in lines of code, you can find me
          playing Geometry Dash, Studying, Or watching YouTube. Whether you're
          looking for a customized Discord bot to streamline your server or a
          front-end magician to give your website a sleek makeover, I'm here to
          transform ideas into reality. Let's connect, collaborate, and create
          something amazing together!
        </p>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Modal></Modal>
      <div className="contact">
        <p>Lets Connect:</p>
        <div className="socials">
          <a href="https://discordapp.com/users/989924991535566879">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://www.instagram.com/_ethan_belcher_/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/I-make-gamez">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
