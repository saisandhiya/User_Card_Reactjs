import PropTypes from "prop-types";

export const FuncSample = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};


FuncSample.propTypes ={
  handleClick:PropTypes.func.isRequired,
}