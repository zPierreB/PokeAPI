class GenerateHTML {
    constructor(body) {
        this.body = body;
        this._figure = [];
    }

    get figure() {
        return this._figure;
    }

    set figure(value) {
        this._figure.push(value);
        console.log(value);
        this._figure.map(
            this.body.append(value)
        )
    }
}

export default GenerateHTML;