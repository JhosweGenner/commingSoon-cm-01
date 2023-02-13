import React, { useState } from "react";
import "../App.css";
// import clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
// import clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
// video
import VideoBg from "../assets/video.mp4";
// Modal
import Modal from "./Modal";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <section className="flex w-[100vw] h-[100vh] flex-col justify-center items-center">
        {/* overlay */}
        <div className="bg-black/70 absolute w-full h-full"></div>
        {/* video */}
        <video
          className="w-full h-full object-cover"
          src={VideoBg}
          autoPlay
          loop
          muted
        />
        {/* content */}
        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-[2rem] mb-4 lg:text-[4rem]">Próxima Apertura</h1>
          <h3 className="font-light max-[400px] mb-12 lg:max-w-[600px]">
            Déjame tu correo y te avisaré una vez que ya estemos listos.
          </h3>
          {/* clock */}
          <FlipClockCountdown
            to={new Date().getTime() + 250 * 3000 * 1152}
            labels={["Días", "Horas", "Minutos", "Segundos"]}
            digitBlockStyle={{
              width: "4vmax",
              height: 60,
              fontSize: "2vmax",
              fontFamily: "Orbitron",
              fontWeight: 700,
              color: "black",
              backgroundColor: "white",
            }}
            dividerStyle={{ color: "black", height: 1 }}
            separatorStyle={{ color: "white", size: "6px" }}
            duration={0.5}
          >
            Finalizado
          </FlipClockCountdown>
          {/* button */}
          <button className="btn hover:text-white" onClick={toggleModal}>
            <i />
            <span className="inline-block z-[2] leading-4 ease-in-out duration-[0.5s] ">
              Notificarme
            </span>
          </button>
        </div>
        {/* modal */}
      </section>
      <Modal show={showModal} toggleModal={toggleModal} />
    </>
  );
}

export default Main;
