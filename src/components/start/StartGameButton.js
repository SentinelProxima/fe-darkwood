const StartGameButton = (props) => {
    if (props.page !== "setup") return;
      return (
        <section>
        <button onClick={()=> {
          if (props.pName !== "") {
            props.setPlayerHP(props.pCon * 4 + 32);
            props.setPlayerATK(props.pStr + 4);
            props.setPlayerDEF(props.pDex);
            props.setPage("town");
          } else {
            props.setNameError("Please name your hero.");
          }
        }}>Start game!</button>
        <p class="errortext">{props.nameError}</p>
        </section>
      );
    };
    
export default StartGameButton;