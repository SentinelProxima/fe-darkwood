const TownButtons = (props) => {
    if (props.page !== "town") return;
      return (
        <section>
        <button class="town-button" onClick={() => {
            if (props.pHP < (props.pCon * 4 + 32)) {
                props.setPlayerHP(props.pCon * 4 + 32);
                props.setDate(props.date + 1);
            }
        }}>Inn</button>
        <button class="town-button">Shop</button>
        <button class="town-button" onClick={() => {
            props.setArena(true);
        }}>Arena</button>
        </section>
      );
    };
    
export default TownButtons;