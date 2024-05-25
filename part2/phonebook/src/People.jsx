const Person = ({ name, number, id, handleDelete }) => {
  return (
    <p>
      {name} {number}
      <button onClick={() => handleDelete(id, name)}>Delete</button>
    </p>
  );
};

const People = ({ people, filteredName, handleDelete }) => {
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
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default People;
