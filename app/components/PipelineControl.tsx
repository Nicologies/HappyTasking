import React = require("react");
import { IPipeline } from "../models/pipeline";
import { CardContent, Card } from '@material-ui/core';

export class PipelineControl extends React.Component<IPipeline> {
  render() {
    return (
      <Card>
        <CardContent>
          {this.props.pipelineName}
        </CardContent>
      </Card>
    );
  }
}
