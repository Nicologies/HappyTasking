export interface ITask {
  taskName: string;
  command: string;
  commandArgs: string;
}

export interface IPipeline {
  pipelineName: string;
  tasks: ITask[];
}
