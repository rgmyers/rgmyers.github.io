const { isTemplateExpression } = require("typescript")

class weather{
    constructor(longitude, latitude){
        this.longitude = longitude;
        this.latitude = latitude;
    }

    set longitude(longitude){        
        this.longitude = longitude;
    }

    get longitude(){

    }

    set latitude(latitude){
        this.latitude = latitude;
    }

    get latitude(){

    }
}
module.exports = weather;