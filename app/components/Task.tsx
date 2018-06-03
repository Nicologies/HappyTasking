import * as React from 'react';
import withRoot from '../containers/WithRoot';

interface ITaskProps {
  taskName: string;
}

class Task extends React.Component<ITaskProps> {
  render() {
    return (
      <div>
        <div>
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}

export default withRoot(Task);
