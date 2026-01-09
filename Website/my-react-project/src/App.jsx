import Card from './components/Card.jsx';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card
  image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  title="React"
  description="Build UI using components"
  buttonText="Learn More"
/>

    </div>
  );
}

export default App;
