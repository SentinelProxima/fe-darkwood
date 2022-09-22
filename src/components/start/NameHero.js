const NameHero = (props) => {
    if (props.page !== "start") return;
      return (
        <section>
            <label>Name: </label>
            <input type="text" value={props.pName} onChange={(event) => props.setPlayerName(event.target.value)} />
        </section>
      );
    };
    
export default NameHero;