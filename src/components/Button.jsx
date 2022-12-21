import "./Button.css";
const Button = (props) => {
  return (
    <button className={`button ${props.className || ""}`}>
      <div className="rectangle-6">
        <span className="add-to-basket">
          {props.addToBasket || "กดลงทะเบียน"}
        </span>
      </div>
    </button>
  );
};
export default Button;
