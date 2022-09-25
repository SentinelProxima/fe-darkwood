import { useState } from 'react';
import DisplayEnemy from './DisplayEnemy';
import EnemyImage from './EnemyImage';
import PlayerStats from './PlayerStats';
import FightButton from './FightButton';
import BattleOutcome from './BattleOutcome';

const Arena = (props) => {
    const [enemyHP, setEnemyHP] = useState(0);
    const [enemyATK, setEnemyATK] = useState(0);
    const [enemyDEF, setEnemyDEF] = useState(0);
    const [enemyXP, setEnemyXP] = useState(0);
    const [enemyGil, setEnemyGil] = useState(0);
    if (props.page !== "town" || props.arena === false) return;
    let enemy = props.enemy;
      return (
        <div>
            <DisplayEnemy enemy={enemy} />
            <EnemyImage enemy={enemy} />
            <PlayerStats enemy={enemy} pHP={props.pHP} eHP={enemyHP} eATK={enemyATK} eDEF={enemyDEF}/>
            <FightButton enemy={enemy} pHP={props.pHP} eHP={enemyHP} eATK={enemyATK} eDEF={enemyDEF} setPlayerHP={props.setPlayerHP} setEnemyHP={setEnemyHP} />
            <BattleOutcome enemy={enemy} eHP={enemyHP} eXP={enemyXP} eGil={enemyGil}/>
        </div>
      );
    };
    
export default Arena;