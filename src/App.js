import "./App.css";
import { Button, Icon } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
      </Button.Content>
      </Button>
        TEST
    </div>
  );
}

export default App;
