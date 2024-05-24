import { useEffect, useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import People from "./People";
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/phones")
      .then((response) => setPeople(response.data));
  }, []);

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewPhoneNumber = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const handleFilteredName = (e) => {
    setFilteredName(e.target.value);
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
      <h1>Phonebook</h1>
      <Filter
        filteredName={filteredName}
        handleFilteredName={handleFilteredName}
      />

      <h2>Add new entry</h2>
      <Form
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNewName={handleNewName}
        handleNewPhoneNumber={handleNewPhoneNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <People people={people} filteredName={filteredName} />
    </>
  );
}

export default App;
