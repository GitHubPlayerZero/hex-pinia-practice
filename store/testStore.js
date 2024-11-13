import { useProductStore } from "./productStore.js";

const { defineStore } = Pinia;

export const useTestStore = defineStore('testStore', {
	state: () => {
		return {
			testObj: {
				num: 0,
			},
			testValue: 0,
		};
	},
});
