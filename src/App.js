import './App.css';
import { Form,Button } from 'react-bootstrap';

function App() {
  return (
    <Form className="try">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  {['radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Femme`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Homme`}
      />
    </div>
  ))}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default App;
