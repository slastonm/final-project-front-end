import React from "react";

const Content = () => {
  // Створити масив з шляхами до зображень
  const imgs = [];
  return (
    <section className="content-grid">
      <div className="carousel-container">
        <button id="prevBtn" className="carousel-btn left-btn">
          {" "}
          ❮{" "}
        </button>
        <div className="event-poster">
          <img
            src="pictures/26 event/Dialogues behind bars.jpg"
            className="active"
          />
          <img src="pictures/26 event/Ruinas Gloriosas y Directrices de Metáforas.jpg" />
          <img src="pictures/26 event/wilderness pack.jpg" />
        </div>
        <button id="nextBtn" className="carousel-btn right-btn">
          {" "}
          ❯{" "}
        </button>
      </div>

      <section className="treiler-ver">
        <video
          src="pictures/26 event/Version 2.6 Trailer - Folie et Dйraison _ Reverse_ 1999.mp4"
          controls
        ></video>
      </section>
      {/* Створити і підключити файл стилів */}
      {/* .content-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 650px;
}

.event-poster {
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

.event-poster img {
  display: none;
  width: 100%;
  height: auto;
  max-height: 600px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px #333;
}

.event-poster img.active {
  display: block;
}

.carousel-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
  transition: background-color 0.3s ease;
  margin: 0 5px;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.left-btn {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.right-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.treiler-ver {
  width: 100%;
  max-width: 550px;
}

.treiler-ver video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px #333;
  max-height: 600px;
} */}
    </section>
  );
};

export default Content;
