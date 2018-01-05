import {combineReducers} from 'redux'
import NumberReducer from './NumberReducer';
import TaskListReducer from './TaskListReducer';

const rootReducers = combineReducers({
    number: NumberReducer,
    taskList: TaskListReducer,
})
export default rootReducers;