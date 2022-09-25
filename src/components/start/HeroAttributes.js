import { useState } from 'react';

const HeroAttributes = (props) => {
  const [error, setError] = useState("");
    if (props.page !== "setup") return;
      return (
        <section>
        <div class="attribute">
            <h3 class="attName">Strength: {props.pStr} </h3>
            <div class="attButtons">
            <button onClick={() => {
              if (props.pStr < 5) {
                if (props.pStr + props.pDex + props.pCon + props.pMag < 10) {
                  setError("");
                  props.setPlayerStr(props.pStr + 1);
                } else {
                  setError("Sum of attributes cannot exceed 10");
                }
              } else {
                setError("Starting attributes cannot exceed 5");
              }
            }}>+</button>
            <button onClick={() => {
              if (props.pStr > 1) {
                setError("");
                props.setPlayerStr(props.pStr - 1);
              } else {
                setError("Starting attributes cannot go below 1");
              }
            }}>−</button>
            </div>
        </div>
        <div class="attribute">
            <h3 class="attName">Dexterity: {props.pDex} </h3>
            <div class="attButtons">
            <button onClick={() => {
              if (props.pDex < 5) {
                if (props.pStr + props.pDex + props.pCon + props.pMag < 10) {
                  setError("");
                  props.setPlayerDex(props.pDex + 1);
                } else {
                  setError("Sum of attributes cannot exceed 10");
                }
              } else {
                setError("Starting attributes cannot exceed 5");
              }
            }}>+</button>
            <button onClick={() => {
              if (props.pDex > 1) {
                setError("");
                props.setPlayerDex(props.pDex - 1);
              } else {
                setError("Starting attributes cannot go below 1");
              }
            }}>−</button>
            </div>
        </div>
        <div class="attribute">
            <h3 class="attName">Constitution: {props.pCon} </h3>
            <div class="attButtons">
            <button onClick={() => {
              if (props.pCon < 5) {
                if (props.pStr + props.pDex + props.pCon + props.pMag < 10) {
                  setError("");
                  props.setPlayerCon(props.pCon + 1);
                } else {
                  setError("Sum of attributes cannot exceed 10");
                }
              } else {
                setError("Starting attributes cannot exceed 5");
              }
            }}>+</button>
            <button onClick={() => {
              if (props.pCon > 1) {
                setError("");
                props.setPlayerCon(props.pCon - 1);
              } else {
                setError("Starting attributes cannot go below 1");
              }
            }}>−</button>
            </div>
        </div>
        <div class="attribute">
            <h3 class="attName">Magic: {props.pMag} </h3>
            <div class="attButtons">
            <button onClick={() => {
              if (props.pMag < 5) {
                if (props.pStr + props.pDex + props.pCon + props.pMag < 10) {
                  setError("");
                  props.setPlayerMag(props.pMag + 1);
                } else {
                  setError("Sum of attributes cannot exceed 10");
                }
              } else {
                setError("Starting attributes cannot exceed 5");
              }
            }}>+</button>
            <button onClick={() => {
              if (props.pMag > 1) {
                setError("");
                props.setPlayerMag(props.pMag - 1);
              } else {
                setError("Starting attributes cannot go below 1");
              }
            }}>−</button>
            </div>
        </div>
        <p class="errortext">{error}</p>
        <button onClick={() => {
          setError("");
          const randomStats = [1, 1, 1, 1];
          let n = 0;
          for (let i = 0; i < 6; i++) {
            n = Math.floor(Math.random() * 4);
            randomStats[n]++;
          }
          props.setPlayerCon(Math.min(randomStats[0], 5));
          props.setPlayerDex(Math.min(randomStats[1], 5));
          props.setPlayerMag(Math.min(randomStats[2], 5));
          props.setPlayerStr(Math.min(randomStats[3], 5));
        }}>Random stats</button>
        </section>
      );
    };
    
export default HeroAttributes;