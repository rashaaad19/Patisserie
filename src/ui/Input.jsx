import classes from "./Input.module.css";
const Input = ({ id, label, ...props }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
};

export default Input;
