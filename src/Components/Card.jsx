import CardComponent from "./CardComponent";

const Card = () => {
  return (
    <>
      <CardComponent
        date="28/10/2020"
        logo="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
        className="amazon"
        name1="Amazon Gift"
        name2="Pay"
        platform="Desktop - Mobile"
      />
      <CardComponent
        date="17 Sep 2020"
        logo="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        className="Apple"
        name1="Apple Gift"
        name2="Payment"
        platform="MacOS - Mobile"
      />
    </>
  );
};

export default Card;
