const Person = ({ name, number, id, deletePerson }) => {
  return (
    <p>
      {name} {number}
      <button onClick={() => deletePerson(id, name)}>Delete</button>
    </p>
  );
};

const People = ({ people, filteredName, deletePerson }) => {
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(filteredName.toLowerCase()),
  );
  return (
    <div>
      {filteredPeople.map((person) => {
        return (
          <Person
            name={person.name}
            number={person.number}
            key={person.id}
            id={person.id}
            deletePerson={deletePerson}
          />
        );
      })}
    </div>
  );
};

export default People;
