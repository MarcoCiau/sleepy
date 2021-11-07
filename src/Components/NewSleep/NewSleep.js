import Container from "../../Util/Container/Container";
import Button from "../../Util/Button/Button";
function NewSleep(props) {
  return (
    <Container>
      <h1>Daily Sleep Tracker</h1>
      <Button>{props.children}</Button>
    </Container>
  );
}

export default NewSleep;
