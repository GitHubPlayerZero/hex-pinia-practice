import { useCartStore } from "../store/cartStore.js";

let cartStore;

export default {
	
	beforeCreate() {
		cartStore = useCartStore();
		console.log(`cartStore ==>`);
		console.log(cartStore);
		console.log(``);
	},
	
	template: 
`<nav class="navbar bg-light">
	<div class="container">
		<span class="navbar-brand" href="#">香香麵攤</span>
		<button type="button" class="btn nav-link">
			購物車
			<span class="badge rounded-pill bg-danger text-white">{{ cartNum }}</span>
		</button>
	</div>
</nav>`,
	
	computed: {
		cartNum() {
			return cartStore.cart.length;
		},
	},
	
	created() {
		console.log(`[created] this ==>`, this);
	},
};
