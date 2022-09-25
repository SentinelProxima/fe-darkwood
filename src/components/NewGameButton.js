const NewGameButton = (props) => {
    if (props.page !== "start") return;
      return (
        <button onClick={()=> {
            props.setPage("setup");
        }}>Start new game!</button>
      );
    };
    
export default NewGameButton;