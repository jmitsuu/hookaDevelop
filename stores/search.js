import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const search = ref();
const reloadData = ref([]);
const queryItems = ref([]);
export const useSearchStore = defineStore('useSearchStore', () => {
 

const searchItems = computed(()=>{
  if (queryItems.value && search.value) {
    queryItems.value = queryItems.value.filter((item) => {
          return item.title.toLowerCase().includes(search.value.toLowerCase())
      })
  } else {
    queryItems.value = reloadData.value
  }

  return queryItems.value
})
  return { search , searchItems, queryItems, reloadData  }
})