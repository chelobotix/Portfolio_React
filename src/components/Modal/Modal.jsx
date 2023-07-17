const Modal = (props) => {
  const { visible, setVisible } = props;
  return (
    <div className={`${visible} w-[300px] h-40 bg-deep-orange-300`}>
      <h1>MODAL</h1>
    </div>
  );
};

export default Modal;
