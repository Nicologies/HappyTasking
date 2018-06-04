import * as React from 'react';
import withRoot from '../containers/WithRoot';
import { FormControl, TextField, Card, CardContent, CardHeader, Button, WithStyles } from '@material-ui/core';
import { remote } from 'electron';
import * as path from 'path';
import * as fs from "fs";
import * as uuidv4 from "uuid/v4";
import { RouteComponentProps } from 'react-router';
import { IPipeline } from '../models/pipeline';

interface INewPipelineState {
  pipelineName: string;
  taskName: string;
  command: string;
  commandArgs: string;
}

export interface INewPipelinePageProps extends RouteComponentProps<any> {
  newPipelineActionDispatcher: (p: IPipeline) => void;
}

export class NewPipeline extends React.Component<WithStyles & INewPipelinePageProps, INewPipelineState> {
  state: INewPipelineState = {
    pipelineName: "",
    taskName: "",
    command: "",
    commandArgs: "",
  };

  createNew(e: React.FormEvent<any>) {
    const toPipeline = (state: INewPipelineState) => {
      const ret: IPipeline = {
        pipelineName: state.pipelineName,
        tasks: [{
          taskName: state.taskName,
          command: state.command,
          commandArgs: state.commandArgs,
        }],
      };
      return ret;
    };

    e.preventDefault();
    const appData = remote.app.getPath("appData");
    const appDir = path.join(appData, "HappyTasking");
    this.mkdir(appDir);
    const pipelineDir = path.join(appDir, "Pipelines");
    this.mkdir(pipelineDir);
    const pipelineFile = path.join(pipelineDir, uuidv4() + ".json");
    const pipeline = toPipeline(this.state);
    fs.writeFileSync(pipelineFile, JSON.stringify(pipeline));
    this.props.newPipelineActionDispatcher(pipeline);
  }

  mkdir(dir: string) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }

  render() {
    return (
      <Card>
        <CardHeader title="Creating New Pipeline"></CardHeader>
        <CardContent>
          <form onSubmit={e => this.createNew(e)}>
            <FormControl fullWidth={true}>
              <TextField
                required
                label="Pipeline Name"
                value={this.state.pipelineName}
                onChange={(e) => this.setState({ pipelineName: e.target.value })}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField
                required
                label="Task Name"
                value={this.state.taskName}
                onChange={(e) => this.setState({ taskName: e.target.value })}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField
                required
                label="Command"
                value={this.state.command}
                onChange={(e) => this.setState({ command: e.target.value })}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField
                label="Command Arguments"
                value={this.state.commandArgs}
                onChange={(e) => this.setState({ commandArgs: e.target.value })}
              />
            </FormControl>
            <FormControl fullWidth={true}>
            </FormControl>
            <FormControl fullWidth={true}>
              <Button type="submit" color='primary' variant="outlined">Create</Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default withRoot(NewPipeline);
