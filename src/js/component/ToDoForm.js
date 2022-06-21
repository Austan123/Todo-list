const [userInput, setUserInput] = useState("");
<form>
  <input
    value={userInput}
    type="text"
    onChange={handleChange}
    placeholder="Enter task..."
  />
</form>;
const handleSubmit = (e) => {
  e.preventDefault();
  addTask(userInput);
  setUserInput("");
};
