const { defineStore } = Pinia;

const datas = [
	{
		id: 1,
		title: '綠色馬卡龍',
		imageUrl: 'https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80',
		price: 120
	},
	{
		id: 2,
		title: '多色餅乾',
		imageUrl: 'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		price: 80
	},
	{
		id: 3,
		title: '甜蜜左擁右抱',
		imageUrl: 'https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		price: 200,
	},
	{
		id: 4,
		title: '巧克力心連心',
		imageUrl: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		price: 160
	},
	{
		id: 5,
		title: '粉係馬卡龍',
		imageUrl: 'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		price: 120
	},
	{
		id: 6,
		title: '爽快快的巧克力脆餅',
		imageUrl: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80',
		price: 150
	},
];


export const useProductStore = defineStore('productStore', {
	// Pinia: state, actions, getters
	// 對應 Vue: data, methods, computed
	
	// 所有的原始資料都會建立在 state
	// state: () => {
	// 	return {
	// 		products: datas,
	// 	};
	// },
	state: () => ({
		products: datas,
	}),
	
	// 建立一些處理過的資料給元件做使用
	getters: {
		// 預設會帶入的參數為 state，因此可以使用解構的方式直接取出 state 裡的資料
		sortedProducts: ({ products }) => {
			return products.sort((a, b) => a.price - b.price);
		}
	}
});
