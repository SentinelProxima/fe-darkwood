const TownStatus = (props) => {
    if (props.page !== "town") return;
      return (
        <section>
        <div class="statbox">
            <h2>{`${props.pName}'s Status`}</h2>
            <h3>{`HP: ${props.pHP} / ${props.pCon * 4 + 32}`}</h3>
            <h3>{`Day ${props.date} of 365`}</h3>
        </div>
        </section>
      );
    };
    
export default TownStatus;