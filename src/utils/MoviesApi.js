class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }
    getCardInfo() {
        return fetch(this._baseUrl).then(handleResponse);
    }
}

const moviesApi = new Api({
    // baseUrl: 'http://localhost:3001',
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});

function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error('Ошибка!!!'))
}

export { moviesApi };