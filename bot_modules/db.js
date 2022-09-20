// uid - chatid, id - this is user id in database
const db_name = 'db.sql';
const sqlite3 = require('sqlite3').verbose();

module.exports.user_add = (uid,username,f_name,l_name,refer='') => { //add new user
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.run(
            "INSERT INTO accounts VALUES (?,?,?,?,?,?,DATE('now'),?,?,?)",
            [null,uid,username,'user',f_name,l_name,0,refer,0], (err, row) => {
                if(err){
                    resolve('error.sql');
                }
                resolve(true);
        });
        db.close();
    });
}
module.exports.user_get = (uid) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.get("SELECT * FROM accounts WHERE uid='"+uid+"'", (err, row) => {
            if(err){
                resolve('error.sql');
            }
            if(row != null){ 
                resolve(row);
            }else{
                resolve(false);
            }
        });
        db.close();
    });
}
module.exports.user_get_ref = (id) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.get("SELECT COUNT(*) as count FROM accounts WHERE referal='"+id+"'", (err, row) => {
            if(err){
                resolve('error.sql');
            }
            if(row != null){ 
                resolve(row);
            }else{
                resolve(false);
            }
        });
        db.close();
    });
} 
module.exports.user_update = function(uid,key,value){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.run("UPDATE accounts SET '"+key+"' = '"+value+"' WHERE uid='"+uid+"'",(err, row) =>{
            if(err){
                resolve('error.sql');
            }
            resolve(true);
        });
        db.close();
    });
};
module.exports.user_mail_get = (id) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.all("SELECT * FROM mail WHERE id='"+id+"'", (err, row) => {
            if(err){
                resolve('error.sql');
            }
            if(row != null){ 
                resolve(row);
            }else{
                resolve(false);
            }
        });
        db.close();
    });
} 

/* Admin panels... */
module.exports.admins_exist = () => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.get("SELECT * FROM accounts WHERE permissions='admin'", (err, row) => {
            if(row != null){ 
                resolve(row);
            }else{
                resolve(false);
            }
        });
        db.close();
    });
} 
module.exports.admin_mail_add = (uid,title,text) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.run(
            "INSERT INTO mail VALUES (?,?,?,DATE('now'),?)",
            [null,uid,title,text], (err, row) => {
                if(err){
                    resolve('error.sql');
                }
                resolve(true);
        });
        db.close();
    });
}
module.exports.admin_mail_del = (id) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.run("DELETE FROM mail WHERE sys_id='"+id+"'", (err, row) => {
                if(err){
                    resolve('error.sql');
                }
                resolve(true);
        });
        db.close();
    });
}
module.exports.admin_user_get = (id) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.get("SELECT * FROM accounts WHERE id='"+id+"'", (err, row) => {
            if(err){
                resolve('error.sql');
            }
            if(row != null){ 
                resolve(row);
            }else{
                resolve(false);
            }
        });
        db.close();
    });
} 
module.exports.admin_user_update = function(id,key,value){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.run("UPDATE accounts SET '"+key+"' = '"+value+"' WHERE id='"+id+"'",(err, row) =>{
            if(err){
                resolve('error.sql');
            }
            resolve(true);
        });
        db.close();
    });
};
module.exports.admin_balance_add = function(id,value){ 
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name);
        db.run("UPDATE accounts SET 'balance' = balance+"+value+" WHERE id='"+id+"'",(err, row) =>{
            if(err){
                resolve('error.sql');
            }
            resolve(true);
        });
        db.close();
    });
};
module.exports.admin_balance_remove = function(id,value){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(db_name); 
        // need check if user dont have enough on balance.
        db.run("UPDATE accounts SET 'balance' = balance-"+value+" WHERE id='"+id+"'",(err, row) =>{
            if(err){
                resolve('error.sql');
            }
            resolve(true);
        });
        db.close();
    });
};
