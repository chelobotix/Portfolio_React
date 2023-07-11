const Button = (props) => {
  const { name, style } = props;
  return (
    <button className={style} type="button">
      {name}
    </button>
  );
};

export default Button;
