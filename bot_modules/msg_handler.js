var msg = new Map();
module.exports.execute = (uid,key,value='') => { //key: set,get,has,delete    
    uid = uid.toString();
    switch(key){
        case "set":
            return msg.set(uid,value);
        case "get":
            return msg.get(uid);
        case "has":
            return msg.has(uid);
        case "delete":
            return msg.delete(uid);
        case "getall":
            return msg;
        case "size":
            return msg.size;
        default: 
            return false;
    }
}
