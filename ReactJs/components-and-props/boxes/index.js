const Box = (props) => {
    const { styling, para, text } = props;
    return (
      <div className={`box ${styling}`}>
        <p className="para">{text}</p>
      </div>
    );
  };
  
  const element = (
    <div className="app-container">
        <div className="app-card">
            <h1 className="app-head">Boxes</h1>
            <div className="boxes-container">
                <Box styling="small" text="Small" />
                <Box styling="medium" text="Medium" />
                <Box styling="large" text="Large" />
            </div>
        </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  