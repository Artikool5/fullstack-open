const Person = ({ name, number }) => {
  return (
    <p>
      {name} {number}
    </p>
  );
};

const People = ({ people, filteredName }) => {
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(filteredName.toLowerCase()),
  );
  return (
    <div>
      {filteredPeople.map((person) => {
        return (
          <Person name={person.name} number={person.number} key={person.id} />
        );
      })}
    </div>
  );
};

export default People;
