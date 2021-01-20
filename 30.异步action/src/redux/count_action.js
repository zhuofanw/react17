import { INCREMENT, DECREMENT } from "./constant";
//同步action返回值为obj
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
//异步action返回值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(createIncrementAction(data));
		}, time);
	};
};
