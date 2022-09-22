const BattleOutcome = (props) => {
    if (props.enemy === "None" || props.eHP > 0) return;
      return (
        <section>
            <h2>{props.enemy} defeated!</h2>
            <h2>You earned {props.eXP} experience points and {props.eGil} gold!</h2>
        </section>
      );
    };
    
export default BattleOutcome;