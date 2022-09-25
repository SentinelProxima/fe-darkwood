const StartFightButton = (props) => {
    if (props.page !== "town" || props.arena === false) return;
      return (
        <button onClick={()=> {
            if (props.enemy !== "None") {
            props.setArena(false);
            props.setPage("arena");
            }
        }}>Fight!</button>
      );
    };
    
export default StartFightButton;