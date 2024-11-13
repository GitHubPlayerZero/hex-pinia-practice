import { useProductStore } from "../store/productStore.js";
import { useCartStore } from "../store/cartStore.js";

const { mapState, mapActions } = Pinia;
// console.log(mapState);

/**
 * 不能在 vue 元件生命週期之外使用，會發生錯誤：
 * pinia.iife.js:1852 Uncaught Error: [🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
 */
// const store = useProductStore();

export default {
	
	beforeCreate() {
		/**
		 * 必須在 vue 元件生命週期之內使用
		 * 在 beforeCreated 就能夠使用 Pinia 了
		 */
		// console.log(`beforeCreate...`);
		// const store = useProductStore();
		// console.log(store);
	},
	
	data () {
		// console.log(`data...`);
		const store = useProductStore();
		// console.log(store);
		
		// 可以在這邊直接使用 state 資料作為自己的資料，也可以在 computed 使用 state 資料
		return {
			products: store.products,
		};
	},
	
	template:
`<div class="container">
	<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3 g-4">
		<div class="col" v-for="product in sortedProducts" :kdy="product.id">
		<!-- <div class="col" v-for="product in products" :kdy="product.id"> -->
			<div class="card">
				<img :src="product.imageUrl"
					class="card-img-top" :alt="product.title" />
				<div class="card-body">
					<h6 class="card-title">
						{{ product.title }}
						<span class="float-end">$ {{ product.price }}</span>
					</h6>
					<a href="#" class="btn btn-outline-primary w-100" @click.prevent="add(product.id)">加入購物車</a>
				</div>
			</div>
		</div>
	</div>
</div>`,
	
	computed: {
		// 可以直接取出 state 的 products
		// ...mapState(useProductStore, ['products']),
		
		// 也可以取出 getter
		...mapState(useProductStore, ["sortedProducts"]),
	},
	
	methods: {
		...mapActions(useCartStore, ["add"]),
	},
};
