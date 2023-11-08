import { useSearchStore } from "#imports";
const store = useSearchStore();
const reloadData = ref([])
export default function searchItems(searchItem){
    reloadData.value = searchItem

    const findProduct = computed(() => {
        if (searchItem && store.search) {
            searchItem = searchItem.filter((item) => {
                return item.title.toLowerCase().includes(store.search.toLowerCase())
            })
        } else {
            searchItem = reloadData.value;
        }
        return searchItem;
    })
    return findProduct;
}