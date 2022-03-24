import React, { useState } from "react";
import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styles from "./CourseInput.module.css";

// import styled from "styled-components";
// const FormControl = styled.div`
//   {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }

//   & invalid label {
//     color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* aama aapde formcontrol je upar banavyu styled component thi ae vaparyu as a component and have className form-control na use kariye to chale ane input empty hoi tyare aapde isValid check karavu padse je className through check kari sakiye agar is invalid then add invalid class to it */}

      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label /*style={{color: !isValid ? 'red' : 'black'}}*/>
          Course Goal
        </label>
        <input
          /*style={{borderColor:  !isValid ? 'red' : 'black', backgroundColor: !isValid ? 'salmon' : 'transparent'}}*/ type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
