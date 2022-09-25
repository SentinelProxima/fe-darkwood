const StartFightButton = (props) => {
    if (props.page !== "town" || props.arena === false) return;
      return (
        <button onClick={()=> {
            props.setArena(false);
            props.setPage("arena");
        }}>Fight!</button>
      );
    };
    
export default StartFightButton;