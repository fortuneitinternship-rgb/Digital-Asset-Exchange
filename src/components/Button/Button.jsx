function Button({
  children,
  variant = "primary",
  size,
  type = "button",
  className = "",
  disabled = false,
  onClick,
  fullWidth = false,
  ...props
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size ? `btn-${size}` : "",
    fullWidth ? "w-100" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
