import Header from './components/Header';
import PageTitle from './components/PageTitle';
import NameHero from './components/start/NameHero';
import HeroAttributes from './components/start/HeroAttributes';
import SelectEnemy from './components/SelectEnemy';
import DisplayEnemy from './components/DisplayEnemy';
import EnemyImage from './components/EnemyImage';
import PlayerStats from './components/PlayerStats';
import FightButton from './components/FightButton';
import BattleOutcome from './components/BattleOutcome';
import './App.css';
import { useState } from 'react';

function App() {
  const [enemy, setEnemy] = useState("None");
  const [page, setPage] = useState("start");
  const [playerName, setPlayerName] = useState("");
  const [playerStr, setPlayerStr] = useState(1);
  const [playerDex, setPlayerDex] = useState(1);
  const [playerCon, setPlayerCon] = useState(1);
  const [playerMag, setPlayerMag] = useState(1);
  const [playerHP, setPlayerHP] = useState(100);
  const [playerATK, setPlayerATK] = useState(10);
  const [playerDEF, setPlayerDEF] = useState(2);
  const [enemyHP, setEnemyHP] = useState(0);
  const [enemyATK, setEnemyATK] = useState(0);
  const [enemyDEF, setEnemyDEF] = useState(0);
  const [enemyXP, setEnemyXP] = useState(0);
  const [enemyGil, setEnemyGil] = useState(0);
  return (
    <div className="App">
      <Header title="Welcome to Darkwood!" />
      <PageTitle page={page} />
      <NameHero page={page} pName={playerName} setPlayerName={setPlayerName} />
      <HeroAttributes page={page} pStr={playerStr} setPlayerStr={setPlayerStr} pDex={playerDex} setPlayerDex={setPlayerDex} pCon={playerCon} setPlayerCon={setPlayerCon} pMag={playerMag} setPlayerMag={setPlayerMag} />
      <SelectEnemy page={page} enemy={enemy} setEnemy={setEnemy} setEnemyHP={setEnemyHP} setEnemyATK={setEnemyATK} setEnemyDEF={setEnemyDEF} setEnemyXP={setEnemyXP} setEnemyGil= {setEnemyGil} />
      <DisplayEnemy enemy={enemy} />
      <EnemyImage enemy={enemy} />
      <PlayerStats enemy={enemy} pHP={playerHP} pATK={playerATK} pDEF={playerDEF} eHP={enemyHP} eATK={enemyATK} eDEF={enemyDEF}/>
      <FightButton enemy={enemy} pHP={playerHP} pATK={playerATK} pDEF={playerDEF} eHP={enemyHP} eATK={enemyATK} eDEF={enemyDEF} setPlayerHP={setPlayerHP} setEnemyHP={setEnemyHP} />
      <BattleOutcome enemy={enemy} eHP={enemyHP} eXP={enemyXP} eGil={enemyGil}/>
    </div>
  );
}

export default App;
