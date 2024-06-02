import { useEffect, useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import People from "./People";
import peopleService from "./serveces/people";
import { Notification } from "./Notification";

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [message, setMessage] = useState(null);

  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewPhoneNumber = (e) => setNewPhoneNumber(e.target.value);
  const handleFilteredName = (e) => setFilteredName(e.target.value);

  useEffect(() => {
    peopleService.getAll().then((initialPeople) => setPeople(initialPeople));
  }, []);

  const updatePerson = (existingPerson) => {
    const isConfirmed = confirm(`${newName} is already added to the Phonebook
        Replace old number with a new one?`);
    if (!isConfirmed) return;

    const personObject = {
      id: existingPerson.id,
      name: existingPerson.name,
      number: newPhoneNumber.trim(),
    };
    peopleService
      .update(existingPerson.id, personObject)
      .then((returnedPerson) => {
        const newPeople = people.map((person) => {
          return person.id === returnedPerson.id ? returnedPerson : person;
        });

        setPeople(newPeople);
        setNewName("");
        setNewPhoneNumber("");
        setMessage({
          content: `${returnedPerson.name}'s phone has been updated`,
          type: "update",
        });
        setTimeout(() => setMessage(null), 5000);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setMessage({
            content: "This person has been deleted on the server",
            type: "error",
          });
          setTimeout(() => setMessage(null), 5000);
        }
      });
    return;
  };

  const addPerson = (e) => {
    e.preventDefault();

    const existingPerson = people.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );
    if (existingPerson) {
      updatePerson(existingPerson);
      return;
    }

    const personObject = {
      id: Date.now().toString(),
      name: newName.trim(),
      number: newPhoneNumber.trim(),
    };

    peopleService
      .create(personObject)
      .then((returnedPerson) => {
        setPeople(people.concat(returnedPerson));
        setNewName("");
        setNewPhoneNumber("");
        setMessage({
          content: `${returnedPerson.name} has been added`,
          type: "update",
        });
        setTimeout(() => setMessage(null), 5000);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setMessage({
            content: "This person has been deleted on the server",
            type: "error",
          });
          setTimeout(() => setMessage(null), 5000);
        }
      });
  };

  const deletePerson = (id, name) => {
    const isConfirmed = confirm(`Are you really want to delete ${name}?`);
    if (isConfirmed) {
      peopleService
        .remove(id)
        .then((returnedPerson) => {
          setMessage({
            content: `${returnedPerson.name} has been deleted`,
            type: "update",
          });
          const newPeople = people.filter(
            (person) => person.id !== returnedPerson.id,
          );
          setPeople(newPeople);
          setTimeout(() => setMessage(null), 5000);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setMessage({
              content: "This person has been deleted on the server",
              type: "error",
            });
            setTimeout(() => setMessage(null), 5000);
          }
        });
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      {!message ? null : (
        <Notification message={message.content} type={message.type} />
      )}
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
      <People
        people={people}
        filteredName={filteredName}
        deletePerson={deletePerson}
      />
    </>
  );
}

export default App;
