export interface ITask {
  taskName: string;
  command: string;
  commandArgs: string;
}

export interface IPipeline {
  id: string;
  pipelineName: string;
  tasks: ITask[];
}
