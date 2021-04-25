import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import pnotifyMessage from './components/pnotify-fn'
import { formRef } from './components/addMarkUp';
import LoadMoreButton from './components/load-more-button';
import NewsApiService from './apiService';
import articleCardTpl from '../templates/article-card.hbs';


const listRef = document.querySelector('.js-gallery')

const loadMoreButton = new LoadMoreButton({
    selector: '[data-action="load-more"]',
    hidden:true,
});
const newsApiService = new NewsApiService();

formRef.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', LoadMore)

function onSearch(e) {
    e.preventDefault();
    newsApiService.query = e.currentTarget.elements.query.value.trim();
    if (newsApiService.query === '') {
        return pnotifyMessage(error, 'Please enter query!')
    }

    loadMoreButton.show();
    newsApiService.resetPage();
    clearArticlesList();
    searchArticles();
}

function searchArticles() {
    loadMoreButton.disable();
    newsApiService.fetchArticles()
        .then(articles => {
        articlesMarkUp(articles);
        loadMoreButton.enable();
        })
    
}

function LoadMore(e) {
    e.preventDefault();
    searchArticles();
    const сoordinateY = e.pageY;
    setTimeout(() => {
        window.scrollTo({
        top: сoordinateY,
        left: 0,
        behavior: 'smooth'
    });
    }, 400);
}

function articlesMarkUp(articles) {
   listRef.insertAdjacentHTML('beforeend',articleCardTpl(articles)) 
}

function clearArticlesList() {
    listRef.innerHTML = '';
}

// function pnotifyMessage(alert, message) {
//     alert({
//         text: `${message}`,
//         delay: 2000,
//         stack: new Stack({
//             dir1:'up'
//         })
//     })
// }
