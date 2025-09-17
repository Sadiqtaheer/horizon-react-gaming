import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PlayerForm from "./components/PlayerForm";
import PlayerTable from "./components/PlayerTable";
import ActionButtons from "./components/ActionButtons";
import Notification from "./components/Notification";
import "./App.css"; 
import "./index.css"; 

function App() {
  const [players, setPlayers] = useState([]);
  const [originalPlayers, setOriginalPlayers] = useState([]);
  const [playerIdCounter, setPlayerIdCounter] = useState(6);
  const [notification, setNotification] = useState(null);
  const [isShowingTop3, setIsShowingTop3] = useState(false);

  useEffect(() => {
    const samplePlayers = [
      { id: 1, name: "Steven", score: 450, duration: 45 },
      { id: 2, name: "Emanuel", score: 550, duration: 38 },
      { id: 3, name: "Evans", score: 350, duration: 52 },
      { id: 4, name: "Stella", score: 250, duration: 41 },
      { id: 5, name: "David", score: 150, duration: 35 },
    ];
    setPlayers(samplePlayers);
    setOriginalPlayers(samplePlayers);
  }, []);

  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addPlayer = (name, duration, score) => {
    if (players.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
      showNotification("Player already exists!", "error");
      return;
    }
    const newPlayer = { id: playerIdCounter, name, duration, score };
    setPlayers([...players, newPlayer]);
    setOriginalPlayers([...originalPlayers, newPlayer]);
    setPlayerIdCounter(playerIdCounter + 1);
    showNotification(`Player "${name}" added successfully!`, "success");
  };

  const removePlayer = (id) => {
    const player = players.find((p) => p.id === id);
    if (!player) return;
    setPlayers(players.filter((p) => p.id !== id));
    setOriginalPlayers(originalPlayers.filter((p) => p.id !== id));
    showNotification(`Player "${player.name}" removed!`, "info");
  };

  const sortByDuration = () => {
    if (isShowingTop3) resetTable();
    setPlayers([...players].sort((a, b) => b.duration - a.duration));
    showNotification("Players sorted by time played!", "info");
  };

  const showTop3Players = () => {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    setPlayers(sorted.slice(0, 3));
    setIsShowingTop3(true);
    showNotification("Showing Top 3 players!", "success");
  };

  const resetTable = () => {
    setPlayers([...originalPlayers]);
    setIsShowingTop3(false);
    showNotification("Table reset!", "info");
  };

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "r") {
        e.preventDefault();
        resetTable();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "t") {
        e.preventDefault();
        showTop3Players();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        sortByDuration();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [players, isShowingTop3]);

  return (
    <div className="p-6">
      <Header />
      <PlayerForm onAddPlayer={addPlayer} />
      <PlayerTable players={players} onRemove={removePlayer} />
      <ActionButtons
        sortByDuration={sortByDuration}
        showTop3Players={showTop3Players}
        resetTable={resetTable}
      />
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
}

export default App;
