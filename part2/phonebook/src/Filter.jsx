export default function Filter({ filteredName, handleFilteredName }) {
  return (
    <div>
      Filter shown with{" "}
      <input type="text" value={filteredName} onChange={handleFilteredName} />
    </div>
  );
}
