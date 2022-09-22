import { useState } from 'react';

const HeroAttributes = (props) => {
  const [error, setError] = useState("");
    if (props.page !== "start") return;
      return (
        <section>
        <div class="attribute">
            <h3 class="attName">Strength: {props.pStr} </h3>
            <div class="attButtons">
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
            <button type="button" onClick={() => {
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
        </section>
      );
    };
    
export default HeroAttributes;