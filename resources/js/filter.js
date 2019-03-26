const searchInput = document.querySelector('#search-input');
const orderSelect = document.querySelector('#sort-select');
const countriesContainer = document.querySelector('#countries-container');

let search = '';
let order = 'asc';

const debounce = (fn, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
};

function removeChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

const getHtml = async () => {
    const res = await fetch('/filter', {
        method: 'POST',
        body: JSON.stringify({
            search,
            order
        })
    });

    return await res.text();
};

const inputEventHandler = e => {
    search = e.target.value;
    renderHtml();
};

searchInput.addEventListener("input", debounce(inputEventHandler, 300));

const selectEventHandler = e => {
    order = e.target.value;
    renderHtml();
};

const renderHtml = async () => {
    const html = await getHtml();
    removeChildren(countriesContainer);
    countriesContainer.insertAdjacentHTML('afterbegin', html)
};

orderSelect.addEventListener("change", selectEventHandler);