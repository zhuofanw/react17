import { INCREMENT, DECREMENT } from "../constant";
//同步action返回值为obj
export const Increment = (data) => ({ type: INCREMENT, data });
export const Decrement = (data) => ({ type: DECREMENT, data });
//异步action返回值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
export const IncrementAsync = (data, time) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(Increment(data));
		}, time);
	};
};
