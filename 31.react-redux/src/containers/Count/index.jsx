import CountUI from "../../components/Count";
import { connect } from "react-redux";
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from "../../redux/count_action";
//1.mapStateToProps函数的是一个对象
//2.返回对象中的key作为传递给UI组件props的key,value就作为传递给UI组件props的value
//3.mapStateToProps用于传递状态
function mapStateToProps(state) {
	return { count: state };
}
//1.mapDispatchToProps返回一个对象
//2.返回对象中的key作为传递给UI组件props的key,value就作为传递给UI组件props的value
//3.mapDispatchToProps用于传递操作状态的方法

function mapDispatchToProps(dispatch) {
	return {
		jia: (number) => {
			//通知redux执行加法
			dispatch(createIncrementAction(number));
		},
		jian: (number) => {
			//通知redux执行加法
			dispatch(createDecrementAction(number));
		},
		jiaAsync: (number, time) => {
			dispatch(createIncrementAsyncAction(number, time));
		},
	};
}
//创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
