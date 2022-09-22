const SelectEnemy = (props) => {
  if (props.page !== "arena") return;
    const enemiesArray = [
        {name: "Giant Rat", hp: 38, atk: 5, def: 1, xp: 5, gil: 2},
        {name: "Turtle", hp: 45, atk: 8, def: 2, xp: 10, gil: 3}
    ]
    return (
      <select value={props.enemy} onChange={(event => {
        props.setEnemy(event.target.value);
        for (let i = 0; i < enemiesArray.length; i++) {
            if (event.target.value === enemiesArray[i].name) {
                props.setEnemyHP(enemiesArray[i].hp);
                props.setEnemyATK(enemiesArray[i].atk);
                props.setEnemyDEF(enemiesArray[i].def);
                props.setEnemyXP(enemiesArray[i].xp);
                props.setEnemyGil(enemiesArray[i].gil);
            }
        }
      })}>
        <option value="None">--Please select--</option>
        <option value="Giant Rat">Giant Rat</option>
        <option value="Turtle">Turtle</option>
      </select>
    );
  };
  
export default SelectEnemy;