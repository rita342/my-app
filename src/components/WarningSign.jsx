import { Alert } from "react-bootstrap";

const WarningSign = ({ text }) => (
  <Alert variant="danger">
    <Alert.Heading>{text}</Alert.Heading>
  </Alert>
);

export default WarningSign;