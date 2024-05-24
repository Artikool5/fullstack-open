import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    { id: Date.now(), name: "Arto Hellas", number: "70001112233" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewPhoneNumber = (e) => {
    setNewPhoneNumber(e.target.value);
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
      name: newName.trim(),
      number: newPhoneNumber.trim(),
    };
    setPeople(people.concat(personObject));
    setNewName("");
    setNewPhoneNumber("");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name:{" "}
          <input
            type="text"
            value={newName}
            onChange={handleNewName}
            required
          />
        </div>
        <div>
          Number:{" "}
          <input
            type="tel"
            value={newPhoneNumber}
            onChange={handleNewPhoneNumber}
            required
          />
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
          return (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
