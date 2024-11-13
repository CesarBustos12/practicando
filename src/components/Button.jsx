function Button ({
  title = "Default",
  classNames = "",
  type = "button",
  onClick = () => {},
}) {
  return (
    <button
      onClick={(e) => onClick(e)}
      type={type}
      className={`bg-blue-500 text-black px-6 py-2 rounded-lg ${classNames}`}
    >
      {title}
    </button>
  );
}

export default Button;