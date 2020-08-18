class CategoryItem {

    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get Id(){
        return this._id;
    }

    set Id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}