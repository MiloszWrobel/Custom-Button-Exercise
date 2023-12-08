export default function Button({ children, mode = "filled", Icon, ...props }) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look

  console.log(mode);
  return (
    <>
      {Icon ? (
        <button {...props} className={mode + "-button button icon-button"}>
          <span className={"button-icon"}>
            <Icon />
          </span>
          {children}
        </button>
      ) : (
        <button {...props} className={mode + "-button button"}>
          {children}
        </button>
      )}
    </>
  );
}
