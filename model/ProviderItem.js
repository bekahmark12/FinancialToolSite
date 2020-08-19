class ProviderItem{

    constructor(id, baseUrl) {
        this._id = id;
        this._baseUrl = baseUrl;
    }

    get Id(){
        return this._id;
    }

    set Id(id){
        this._id = id;
    }

    get baseUrl(){
        return this._baseUrl;
    }

    set baseUrl(baseUrl){
        this._baseUrl = baseUrl;
    }
}