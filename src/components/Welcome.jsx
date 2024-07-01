import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      <h1>Benvenuti nel mio BookShoop</h1>
      {["dark"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Tutti i Libri al 50%
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
