

class Request {
    constructor(url, id) {
        this.id = id;
        this.url = url;
    }

    fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/${this.id}`)
            .then((response) => response.json())
            .then(data => resolve(data))
            .catch((error) => reject(error))
        })
    }
}

export default Request;