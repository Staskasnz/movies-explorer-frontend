class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    signUp(data) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                password: data.password,
                email: data.email
            })
        })
            .then(handleResponseWithStatus)
    }

    signIn(data) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        })
            .then(handleResponseWithStatus)
    }

    updateUser(data) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(handleResponseWithStatus)
    }

    getSavedCard() {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
        })
            .then(handleResponse)
    }

    savedCard(data) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                country: data.country,
                description: data.description,
                director: data.director,
                duration: data.duration,
                movieId: data.id,
                image: `https://api.nomoreparties.co${data.image.url}`,
                nameEN: data.nameEN,
                nameRU: data.nameRU,
                trailerLink: data.trailerLink,
                year: data.year,
            })
        })
            .then(handleResponse)
    }

    deleteSavedCard(movieId) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
            .then(handleResponse)
    }

    checkJwt(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            }
        }).then(handleResponse)
    }

}

const mainApi = new Api({
    baseUrl: 'https://film.nomoredomains.work',
    // baseUrl: 'http://localhost:3001',
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

function handleResponseWithStatus(res) {
    if (res.ok) {
        return res.json();
    } else {
        return res.json()
            .then(data => ({ status: res.status, data }))
            .then(response => Promise.reject(response));
    }
}


export { mainApi };