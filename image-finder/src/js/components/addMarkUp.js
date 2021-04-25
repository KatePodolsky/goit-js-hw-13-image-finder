const containerRef = document.querySelector('body');
const formMarkUp = '<form class="search-form" id="search-form"><input type="text" name="query" autocomplete="off" placeholder="Search images..."/></form>'
containerRef.insertAdjacentHTML('afterbegin', formMarkUp);

const formRef = document.querySelector('#search-form');
const buttonSubmit = document.createElement('button');
buttonSubmit.classList.add('button');
buttonSubmit.setAttribute('type', 'submit')
buttonSubmit.textContent = 'Find';
formRef.append(buttonSubmit);

const listMarkUp = document.createElement('ul');
listMarkUp.classList.add('gallery','js-gallery');
formRef.after(listMarkUp);

const buttonLoadMore = document.createElement('button');
buttonLoadMore.classList.add('button','load-btn');
buttonLoadMore.setAttribute('type', 'button')
buttonLoadMore.setAttribute('data-action', 'load-more')
listMarkUp.after(buttonLoadMore);
const buttonLoadMoreRef = document.querySelector('[data-action="load-more"]')

const spanSpinner = document.createElement('span');
spanSpinner.classList.add('spinner-border','spinner-border-sm','spinner','is-hidden');
spanSpinner.setAttribute('role', 'status');
spanSpinner.setAttribute('aria-hidden', 'true');
buttonLoadMoreRef.prepend(spanSpinner);

const spanSpinnerText = document.createElement('span');
spanSpinnerText.classList.add('label');
spanSpinnerText.textContent = 'Load More';
buttonLoadMoreRef.append(spanSpinnerText);

export { formRef }