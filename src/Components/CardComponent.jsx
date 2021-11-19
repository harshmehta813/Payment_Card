const CardComponent = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="dFlex">
          <p>{props.date}</p>
          <img src={props.logo} id="logo" alt="logo" />
        </div>
        <button className="btn">Case Study</button>
        <h1>{props.name1}</h1>
        <h1>{props.name2}</h1>
        <p className="dFlex">
          {props.platform}
          <span className="material-icons-outlined">arrow_forward</span>
        </p>
      </div>
    </>
  );
};

export default CardComponent;
