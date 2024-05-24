const Form = ({
  newName,
  newPhoneNumber,
  handleNewName,
  handleNewPhoneNumber,
  addPerson,
}) => {
  return (
    <form>
      <div>
        Name:{" "}
        <input type="text" value={newName} onChange={handleNewName} required />
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
  );
};

export default Form;
