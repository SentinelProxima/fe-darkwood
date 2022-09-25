const FightButton = (props) => {
    if (props.enemy === "None") return;
      return (
        <button onClick={()=> {
            props.setPlayerHP(props.pHP+props.pDEF-props.eATK);
            props.setEnemyHP(Math.max(props.eHP+props.eDEF-props.pATK, 0));
        }}>Fight!</button>
      );
    };
    
export default FightButton;