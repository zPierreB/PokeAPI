class Request {
    constructor(url, id) {
        this.id = id;
        this.url = url;
    }

    fetchData = (endpoint) => {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/${endpoint}`)
            .then((response) => response.json())
            .then(data => resolve(data))
            .catch((error) => reject(error))
        })
    }
}

export default Request;