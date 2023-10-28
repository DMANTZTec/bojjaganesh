const Notification = (props) => {
  const { srcLink, text, styling } = props;
  return (
    <div className={`notification ${styling}`}>
      <img src={srcLink} className="image" />
      <p className="paragraph">{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="head">Notifications</h1>
    <Notification
      styling="info"
      text="Information Message"
      srcLink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      styling="success"
      text="Success Message"
      srcLink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      styling="warning"
      text="Warning Message"
      srcLink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      styling="error"
      text="Error Message"
      srcLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
