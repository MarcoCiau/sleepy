import React, { useState } from "react";
import Button from "../../Util/Button/Button";
function NewSleepForm(props) {
  const [value, setValue] = useState(new Date("2018-01-01T00:00:00.000Z"));

  function submitHandler(event) {
    event.preventDefault();
    console.log("clicked!");
  }

  function cancelFormHandler(event) {
    event.preventDefault();
    console.log("cancel clicked!");
  }

  function startDateHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  function startTimeHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
  }


  function endDateHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  function endTimeHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Time Of Sleep:
        <br />
        <input type="date" name="start-sleep_date" onChange={startDateHandler}/>
        <input type="time" name="start-sleep_time" onChange={startTimeHandler} />
      </label>
      <br />
      <br />
      <label>
        Wake Up Time:
        <br />
        <input type="date" name="end-sleep_date" onChange={endDateHandler}/>
        <input type="time" name="end-sleep_time" onChange={endTimeHandler}/>
      </label>
      <br />
      <br />
      <Button variant="contained" onClick={cancelFormHandler}>
        Cancel
      </Button>
      <Button variant="contained" type="submit">
        + Add
      </Button>
    </form>
  );
}

export default NewSleepForm;
