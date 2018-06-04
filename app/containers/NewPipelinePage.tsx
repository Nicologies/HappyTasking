import { INewPipelinePageProps } from '../components/NewPipeline';
import * as newPipelineAction from '../actions/newPipelineAction';
import { IState } from '../reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NewPipeline } from '../components/NewPipeline';

function mapStateToProps(state: IState): Partial<INewPipelinePageProps> {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<INewPipelinePageProps> {
  return bindActionCreators({ ...newPipelineAction }, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(NewPipeline));
