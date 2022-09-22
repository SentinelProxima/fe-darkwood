const PageTitle = (props) => {
    const titleLookup = {start: "Create your hero:"}
    return (
      <section>
        <h2>{titleLookup[props.page]}</h2>
      </section>
    );
  };
  
  export default PageTitle;