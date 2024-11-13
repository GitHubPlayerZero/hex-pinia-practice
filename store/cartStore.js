import { useProductStore } from "./productStore.js";

const { defineStore } = Pinia;

export const useCartStore = defineStore('cartStore', {
	state: () => {
		return {
			cart: [
				// { id, productId, qty}
			],
		};
	},
	
	actions: {
		findCart (cartId) {
			return this.cart.find((item) => item.id === cartId);
		},
		
		// 加入購物車
		add (productId, qty = 1)
		{
			// console.log(productId, qty);
			
			// 因為使用傳統函式，使用 this 可以指到 store 本身
			// console.log(this);
			
			// 搜尋購物車是否已有相同商品
			const existingProduct = this.cart.find((item) => item.productId === productId);
			
			// 若有相同商品則修改其資料
			if (existingProduct) {
				existingProduct.qty += qty;
			}
			// 否則加入新的商品資料
			else {
				this.cart.push({
					id: new Date().getTime(),
					productId,
					qty,
				});
			}
			// console.log(`cart ==>`, this.cart);
		},
		
		// 移出購物車
		remove (cartId) {
			const index = this.cart.findIndex((item) => item.id === cartId);
			console.log(`index = ${index}`);
			this.cart.splice(index, 1);
		},
		
		// 設定數量
		setQuantity(event, cartId) {
			// console.log(`cartId ==> ${cartId}`);
			// console.log(`value ==> ${event.target.value}`);
			const cart = this.findCart(cartId);
			if (cart) {
				// value 取出的型別會是字串，因此需轉型儲存為數值型別
				cart.qty = Number(event.target.value);
			}
		},
	},
	
	getters: {
		cartInfo: ({ cart }) =>
		{
			// 產品資訊
			const { products } = useProductStore();
			// console.log(products);
			
			let total = 0;
			
			const cartDetail = cart.map((item) => {
				const product = products.find((item2) => item.productId === item2.id);
				const subtotal = product.price * item.qty;
				total += subtotal;
				
				return {
					...item,
					product: {...product},
					subtotal,
				};
			});
			console.log(`cartInfo ==>`, cartDetail);
			
			return {
				cartDetail,
				total,
			};
		},
	},
});
