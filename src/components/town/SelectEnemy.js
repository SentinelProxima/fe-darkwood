import enemyData from '../data/enemy-data';

const SelectEnemy = (props) => {
  if (props.page !== "town" || props.arena === false) return;
    return (
      <div class="enemy-select">
      <select value={props.enemy} onChange={(event => {
        props.setEnemy(event.target.value);
      })}>
        <option value="None">--Select an enemy--</option>
        {enemyData.forEach((enemy) => (
        <option value={enemy.name}>{enemy.name}</option>
        ))}
      </select>
      </div>
    );
  };
  
export default SelectEnemy;