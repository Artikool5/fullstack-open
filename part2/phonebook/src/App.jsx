import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    { id: Date.now(), name: "Arto Hellas" },
  ]);
  const [newName, setNewName] = useState("");

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const personExists = people.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );
    if (personExists) {
      alert(`${newName} is already added to the Phonebook`);
      return;
    }

    const personObject = {
      id: Date.now(),
      name: newName,
    };
    setPeople(people.concat(personObject));
    setNewName("");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input type="text" value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {people.map((person) => {
          return <p key={person.id}>{person.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
