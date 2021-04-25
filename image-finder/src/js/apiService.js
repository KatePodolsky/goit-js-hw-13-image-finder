export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 12;
    }
    
    fetchArticles() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '21314636-5423c4bd79d6decc1761e090e'
    
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${API_KEY}`)
        .then(response => response.json())
        .then(({hits}) => {
             this.page += 1;
             return hits;
         })
        .catch(error => console.log(error))

    }
    resetPage() {
         this.page = 1;
    }
    
    get query() {
        return this.searchQuery;
        }

    set query(newQuery) {
        this.searchQuery = newQuery;
        }
}
