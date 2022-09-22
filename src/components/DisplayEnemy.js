const DisplayEnemy = (props) => {
  if (props.enemy === "None") return;
    return (
      <p2>
        <h1>You have chosen to fight {props.enemy}!</h1>
      </p2>
    );
  };
  
  export default DisplayEnemy;