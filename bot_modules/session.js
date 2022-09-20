var session = new Map();
module.exports.execute = (uid,key,value='') => { //key: set,get,has,delete    
    uid = uid.toString();
    switch(key){
        
        case "set":
            return session.set(uid,value);
        case "get":
            return session.get(uid);
        case "has":
            return session.has(uid);
        case "delete":
            return session.delete(uid);
        case "getall":
            return session;
        default:
            return false;
    }
}