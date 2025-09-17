export default function ActionButtons({ sortByDuration, showTop3Players, resetTable }) {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <button onClick={sortByDuration} className="glow-button">Sort by Duration</button>
      <button onClick={showTop3Players} className="glow-button">Show Top 3</button>
      <button onClick={resetTable} className="glow-button">Reset</button>
    </div>
  );
}
