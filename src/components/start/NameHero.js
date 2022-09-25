function capFirstLetter (str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const NameHero = (props) => {
    if (props.page !== "setup") return;
    return (
      <section>
        <label>Name: </label>
          <input type="text" value={props.pName} onChange={(event) => {
            if (event.target.value === "") {
              props.setNameError("Please name your hero.");
            } else {
              props.setNameError("");
            }
            props.setPlayerName(capFirstLetter(event.target.value));
          }} />
      </section>
    );
  };
    
export default NameHero;