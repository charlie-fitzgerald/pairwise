import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleClick = () => {
    setAlertVisibility(true);
  };

  const onClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={onClose}>Please dismiss me</Alert>}

      <Button color="primary" onClick={handleClick}>
        Hello
      </Button>
    </div>
  );
}

export default App;
