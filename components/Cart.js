import { useCartStore } from "../store/cartStore.js";
const { mapState, mapActions } = Pinia;

export default {
	template:
`<div class="bg-light py-4 my-4">
	<div class="container">
		<div v-if="cartInfo.cartDetail.length <= 0">購物車沒有任何品項</div>
		
		<table v-else class="table align-middle">
			<tbody>
				<tr v-for="item in cartInfo.cartDetail" :key="item.id">
					<td width="100">
						<a href="#" class="text-dark" @click.prevent="remove(item.id)">
							<i class="fas fa-times"></i>
						</a>
					</td>
					<td width="100">
						<img :src="item.product.imageUrl"
							class="table-image" alt="item.product.title" />
					</td>
					<td>{{ item.product.title }}</td>
					<td width="200">
						<!-- <select :value="item.qty" @change="setQuantity($event, item.id)" class="form-select"> -->
						<!-- 另一種寫法 -->
						<select :value="item.qty" @change="(event) => setQuantity(event, item.id)" class="form-select">
							<option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
						</select>
					</td>
					<td width="200" class="text-end">$ {{ item.subtotal }}</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="5" class="text-end">總金額 NT$ {{ cartInfo.total }}</td>
				</tr>
			</tfoot>
		</table>
	</div>
</div>`,
	
	methods: {
		...mapActions(useCartStore, ["remove", "setQuantity"]),
	},

	computed: {
		...mapState(useCartStore, ["cartInfo"]),
	},
};
