var panel_current = new Map();
module.exports.execute = (uid,key,value='') => { //key: set,get,has,delete    
    uid = uid.toString();
    switch(key){
        case "set":
            return panel_current.set(uid,value);
        case "get":
            return panel_current.get(uid);
        case "has":
            return panel_current.has(uid);
        case "delete":
            return panel_current.delete(uid);
        case "getall":
            return panel_current;
        default:
            return false;
    }
}
