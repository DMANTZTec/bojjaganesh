const Button = (props) => {
    const { styling, text } = props;
    return <button className={styling}>{text}</button>;
  };
  
  const element = (
    <div className="app-container">
      <h1 className="app-head">Social Buttons</h1>
      <div className="buttons-container">
        <Button styling="like button" text="Like" />
        <Button styling="comment button" text="Comment" />
        <Button styling="share button" text="Share" />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  