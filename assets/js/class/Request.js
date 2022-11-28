

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

    // fetchData = async() => {
    //         await fetch(`${this.url}/${this.id}`)
    //         // .then(data => console.log(data))
    //         // .then((response) => response.json())
    //         return response.json()
    //         .catch((error) => console.log(error))
    // }
}

export default Request;