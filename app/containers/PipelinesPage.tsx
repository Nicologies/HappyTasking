import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { IPipeline } from '../models/pipeline';
import { IState } from '../reducers';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';

interface IPipelinesPageProps extends RouteComponentProps<any> {
  pipelines: IPipeline[];
  drawerState: boolean;
}

@(connect(mapStateToProps) as any)
export class PipelinesPage extends React.Component<IPipelinesPageProps> {
  render() {
    return (
      <div>
        <List>
          {this.props.pipelines && this.props.pipelines.map(p => {
            return (
              <ListItem key={`pipeline ${p.id}`}>
                <ListItemText primary={p.pipelineName} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state: IState): Partial<IPipelinesPageProps> {
  return {
    pipelines: state.pipelines,
    drawerState: state.drawerState,
  };
}

export default withRouter(PipelinesPage);
