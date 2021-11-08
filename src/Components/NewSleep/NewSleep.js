import * as React from "react";
import Container from "../../Util/Container/Container";
import NewSleepForm from "./NewSleepForm";
import LineChart from "../LineChart/LineChart";
function NewSleep(props) {
  return (
    <Container>
      <h1>Daily Sleep Tracker</h1>
      <NewSleepForm></NewSleepForm>
      <LineChart></LineChart>
    </Container>
  );
}

export default NewSleep;
