const Button = (props) => {
  const { name, style, liveDemo, visible, setVisible } = props;

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else {
      setVisible("");
    }
  };
  return (
    <>
      <button onClick={buttonType} className={style} type="button">
        {name}
      </button>
    </>
  );
};

export default Button;
