import { useTestStore } from "../store/testStore.js";

const { storeToRefs } = Pinia;
let testStore;

export default {
	
	// 必須在 Vue 的生命週期中建立 store 實例
	beforeCreate() {
		testStore = useTestStore();
		console.log(`[beforeCreate] ==>`, testStore);
	},
	
	data () {
		// 將 store 的資料轉為响應式
		const refStore = storeToRefs(testStore);
		console.log(`refStore ==>`, refStore);
		
		return {
			testStore,
			testObj: testStore.testObj,
			testValue: testStore.testValue,	// 無法响應
			refTestObj: refStore.testObj,
			refTestValue: refStore.testValue,	// 可以响應
		};
	},
	
	created() {
		console.log(`[created A] this ==>`, this);
	},
	
	template:
`<div class="box">`
+ `<h2 class="mb-3">元件 A</h2>`
+ `
<table class="table table-bordered border-info">
	<tbody>
		<tr>
			<th rowspan="3">testStore</th>
			<th>testStore</th>
			<td>{{ testStore }}</td>
		</tr>
		<tr>
			<th>testStore.testObj</th>
			<td>{{ testStore.testObj }}</td>
		</tr>
		<tr>
			<th>testStore.testValue</th>
			<td>{{ testStore.testValue }}</td>
		</tr>
		<tr>
			<th rowspan="2">無响應式</th>
			<th>testObj</th>
			<td>{{ testObj }}</td>
		</tr>
		<tr>
			<th>testValue</th>
			<td>{{ testValue }}</td>
		</tr>
		<tr>
			<th rowspan="2">响應式</th>
			<th>refTestObj</th>
			<td>{{ refTestObj }}</td>
		</tr>
		<tr>
			<th>refTestValue</th>
			<td>{{ refTestValue }}</td>
		</tr>
	</tbody>
</table>
`
+ `<button type="button" class="btn btn-primary" @click="addTestStore">累加 testStore</button>&nbsp;&nbsp;`
+ `<button type="button" class="btn btn-secondary" @click="addNonRef">累加沒有响應式的值</button>&nbsp;&nbsp;`
+ `<button type="button" class="btn btn-success" @click="addRef">累加有响應式的值</button>&nbsp;&nbsp;`
+ `</div>`,
	
	methods: {
		addTestStore() {
			console.log(`addTestStore...`);
			this.testStore.testObj.num ++;
			this.testStore.testValue ++;
		},
		
		addNonRef() {
			console.log(`addNonRef...`);
			this.testObj.num ++;
			this.testValue ++;
		},
		
		addRef() {
			console.log(`addRef...`);
			this.refTestObj.num ++;
			this.refTestValue ++;
		},
	},
};
