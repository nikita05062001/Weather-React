import React from "react";

const Form = ({ weatherSearch }) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        weatherSearch(e);
      }}
    >
      <input type={"text"} placeholder="" name="city" />
      <button>Поиск</button>
    </form>
  );
};
export default Form;
