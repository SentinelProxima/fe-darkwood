const PageTitle = (props) => {
    const titleLookup = {
      start: "",
      setup: "Create your hero:",
      town: `What will you do today, ${props.pName}?`
    }
    return (
      <section>
        <h2>{titleLookup[props.page]}</h2>
      </section>
    );
  };
  
  export default PageTitle;