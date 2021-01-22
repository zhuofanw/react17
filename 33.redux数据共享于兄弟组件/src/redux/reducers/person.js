import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{ id: "001", name: "tom", age: 18 }];
//处理数据的reducer函数
export default function personReducer(prevState = initState, action) {
	console.log(prevState);
	const { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			return [data, ...prevState];
		default:
			return prevState;
	}
}
