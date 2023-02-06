//Component that accepts a single props (time) and returns a how it will render.
const Clock = (props) => {
  return (
    <div>
      <h1>
        {props.hour}:{props.minute}:{props.second}
      </h1>
    </div>
  );
};

export default Clock;
