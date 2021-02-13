class LydiaSession {
    constructor(data, client) {
        this._client = client;

        this.id = data.session_id;
        this.language = data.language;
        this.available = data.available;
        this.expires = data.expires;
    }

    async think_thought(text) {
        return this._client.think_thought(this.id, text);
    }
}

module.exports = LydiaSession;
