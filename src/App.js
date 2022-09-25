import Header from './components/Header';
import PageTitle from './components/PageTitle';
import NewGameButton from './components/NewGameButton';
import NameHero from './components/start/NameHero';
import HeroAttributes from './components/start/HeroAttributes';
import StartGameButton from './components/start/StartGameButton';
import TownButtons from './components/town/TownButtons';
import SelectEnemy from './components/town/SelectEnemy';
import StartFightButton from './components/town/StartFightButton';
import TownStatus from './components/town/TownStatus';
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
  const [date, setDate] = useState(1);
  const [playerName, setPlayerName] = useState("");
  const [nameError, setNameError] = useState("");
  const [playerStr, setPlayerStr] = useState(1);
  const [playerDex, setPlayerDex] = useState(1);
  const [playerCon, setPlayerCon] = useState(1);
  const [playerMag, setPlayerMag] = useState(1);
  const [playerHP, setPlayerHP] = useState(0);
  const [playerATK, setPlayerATK] = useState(0);
  const [playerDEF, setPlayerDEF] = useState(0);
  const [arena, setArena] = useState(false);
  return (
    <div className="App">
      <Header title="Welcome to Darkwood!" />
      <PageTitle page={page} pName={playerName} />
      <NewGameButton page={page} setPage={setPage} />
      <NameHero page={page} pName={playerName} setPlayerName={setPlayerName} setNameError={setNameError} />
      <HeroAttributes page={page} pStr={playerStr} setPlayerStr={setPlayerStr} pDex={playerDex} setPlayerDex={setPlayerDex} pCon={playerCon} setPlayerCon={setPlayerCon} pMag={playerMag} setPlayerMag={setPlayerMag} />
      <StartGameButton page={page} setPage={setPage} pName={playerName} nameError={nameError} setNameError={setNameError} setPlayerHP={setPlayerHP} setPlayerATK={setPlayerATK} setPlayerDEF={setPlayerDEF} pStr={playerStr} pDex={playerDex} pCon={playerCon} />
      <TownButtons page={page} setPage={setPage} pHP={playerHP} pCon={playerCon} setPlayerHP={setPlayerHP} date={date} setDate={setDate} arena={arena} setArena={setArena} />
      <SelectEnemy page={page} enemy={enemy} setEnemy={setEnemy} arena={arena} />
      <StartFightButton page={page} arena={arena} setPage={setPage} setArena={setArena} />
      <TownStatus page={page} setPage={setPage} pName={playerName} pHP={playerHP} pCon={playerCon} date={date} />
      {/* <DisplayEnemy enemy={enemy} />
      <EnemyImage enemy={enemy} />
      <PlayerStats enemy={enemy} pHP={playerHP} pATK={playerATK} pDEF={playerDEF} eHP={enemyHP} eATK={enemyATK} eDEF={enemyDEF}/>
      <FightButton enemy={enemy} pHP={playerHP} pATK={playerATK} pDEF={playerDEF} eHP={enemyHP} eATK={enemyATK} eDEF={enemyDEF} setPlayerHP={setPlayerHP} setEnemyHP={setEnemyHP} />
      <BattleOutcome enemy={enemy} eHP={enemyHP} eXP={enemyXP} eGil={enemyGil}/> */}
    </div>
  );
}

export default App;
