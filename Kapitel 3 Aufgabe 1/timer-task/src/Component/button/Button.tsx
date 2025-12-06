function Button({
  className,
  buttonText,
}: {
  className: string;
  buttonText: string;
}) {
  return <button className={className}>{buttonText}</button>;
}

export default Button;
