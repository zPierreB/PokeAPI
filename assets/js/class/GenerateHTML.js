class GenerateHTML {
    construtor(body) {
        this.body = body;
        this._figure = [];
    }

    get figure() {
        return this._figure;
    }

    set figure(value) {
        this._figure.push(value);
        this._figure.map((element) => {
            this.body.append(element)
        })
    }
}

export default GenerateHTML;