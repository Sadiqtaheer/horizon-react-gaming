import { useState } from "react";

export default function PlayerForm({ onAddPlayer }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration || !score) return;
    onAddPlayer(name, Number(duration), Number(score));
    setName("");
    setDuration("");
    setScore("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 items-center justify-center py-4"
    >
      <input
        className="px-3 py-2 rounded-lg text-black"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="px-3 py-2 rounded-lg text-black"
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        className="px-3 py-2 rounded-lg text-black"
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit" className="glow-button">
        Add Player
      </button>
    </form>
  );
}
