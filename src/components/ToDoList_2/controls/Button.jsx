function Button({
  text,
  onClick,
  variant = "primary",
  type = "button",
  size,
  disabled = { disabled },
}) {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {text}
    </button>
  );
}

export default Button;
