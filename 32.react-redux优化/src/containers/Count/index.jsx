import CountUI from "../../components/Count";
import { connect } from "react-redux";
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from "../../redux/count_action";

//创建并暴露一个Count的容器组件并与redux连接
export default connect(
	(state) => ({ count: state }),
	//mapDispatch()一般写法
	// (dispatch) => ({
	// 	jia: (number) => {
	// 		//通知redux执行加法
	// 		dispatch(createIncrementAction(number));
	// 	},
	// 	jian: (number) => {
	// 		//通知redux执行加法
	// 		dispatch(createDecrementAction(number));
	// 	},
	// 	jiaAsync: (number, time) => {
	// 		dispatch(createIncrementAsyncAction(number, time));
	// 	},
	// })
	//mapDispatch()简化写法
	{
		jia: createIncrementAction,
		jian: createDecrementAction,
		jiaAsync: createIncrementAsyncAction,
	}
)(CountUI);
