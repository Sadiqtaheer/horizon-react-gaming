export default function PlayerTable({ players, onRemove }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full text-center border-collapse bg-black bg-opacity-30 rounded-xl shadow-lg">
        <thead>
          <tr className="bg-purple-800 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Duration</th>
            <th className="py-2 px-4">Score</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr
              key={p.id}
              className="odd:bg-purple-900 even:bg-indigo-900 hover:bg-purple-700"
            >
              <td className="py-2 px-4">{p.name}</td>
              <td className="py-2 px-4">{p.duration} min</td>
              <td className="py-2 px-4">{p.score}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => onRemove(p.id)}
                  className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
