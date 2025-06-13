import React from "react";

const EventList = () => {
  const events = [
    {
      start: "2025.05.29",
      end: "2025.07.03",
      title: "The main part of the “Folie et Déraison” event is now open.",
    },
    {
      start: "2025.05.29",
      end: "2025.06.19",
      title: "Character banner “A Writing Writer Written” available.",
    },
    {
      start: "2025.05.29",
      end: "2025.06.19",
      title: "“Dialogues behind bars |” is now open.",
    },
    {
      start: "2025.05.29",
      end: "2025.06.19",
      title: "“Ruinas Gloriosas y Directices de Metáforas” is open.",
    },
    {
      start: "2025.06.03",
      end: "2025.07.03",
      title: "“Mane Bulletin” event is open.",
    },
    {
      start: "2025.06.05",
      end: "2025.06.19",
      title: "“Bette: The last film” event is open.",
    },
    {
      start: "2025.06.19",
      end: "2025.07.03",
      title: "Character banner “The Shattered Product” available.",
    },
    {
      start: "2025.06.19",
      end: null,
      title:
        "“The Answering Machine, The Butterfly and The Literaly Critic” is open.",
    },
    {
      start: "2025.06.20",
      end: "2025.07.03",
      title: "The rerun of event “Farewell, Rayashki” is open.",
    },
    {
      start: "2025.06.28",
      end: "2025.07.03",
      title: "Event “Labs Snapshots” is open.",
    },
    {
      start: "2025.06.19",
      end: "2025.07.03",
      title: "“Dialogues behind bars ||” is open.",
    },
  ];
  return (
    <section className="recent-updates">
      <div class="recent-updates">
        <h2>Recently Updated</h2>
        <div className="avatars">
          <img src="pictures/26 event/Recoleta_Icon.webp" alt="Character" />
          <img src="pictures/26 event/Recoleta cube.png" alt="Psycube" />
          <img src="pictures/26 event/Bette cube.png" alt="Psycube" />
        </div>

        <ul>
          {events.map((event, idx) => (
            <li key={idx}>
              <span
                className="date"
                data-start={event.start}
                data-end={event.end || undefined}
              ></span>
              {event.title}
            </li>
          ))}
        </ul>
        {/* Підключити файл стилів компонента і перенести туди стилів */}
        {/* .recent-updates {
  background: rgba(30, 30, 30, 0.8);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.6);
}

.recent-updates h2 {
  font-family: "Palatino Linotype", serif;
  color: #ffdca0;
  margin-bottom: 20px;
}

.avatars img {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px solid #999;
}

.update-list {
  list-style: none;
  padding-left: 0;
}

.update-list li {
  margin-bottom: 12px;
  line-height: 1.5;
  border-left: 4px solid #ffdca0;
  padding-left: 10px;
}

.update-list strong {
  color: #f0c060;
}

.date {
  font-weight: bold;
}

.date {
    margin-right: 0.5em;
    font-weight: bold;
}

@media (max-width: 800px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px; 
  }
} */}
      </div>
    </section>
  );
};

export default EventList;
