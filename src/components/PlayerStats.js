const PlayerStats = (props) => {
    if (props.enemy === "None") return;
      return (
        <section>
        <h2>Player HP: {props.pHP} Enemy HP: {props.eHP}</h2>
        <h2>Player ATK: {props.pATK} Enemy ATK: {props.eATK}</h2>
        <h2>Player DEF: {props.pDEF} Enemy DEF: {props.eDEF}</h2>
        </section>
      );
    };
    
export default PlayerStats;