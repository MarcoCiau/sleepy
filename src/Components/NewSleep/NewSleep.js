import * as React from "react";
import Container from "../../Util/Container/Container";
import NewSleepForm from "./NewSleepForm";
function NewSleep(props) {
  return (
    <Container>
      <h1>Daily Sleep Tracker</h1>
      <NewSleepForm></NewSleepForm>
    </Container>
  );
}

export default NewSleep;
