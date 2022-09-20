const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sql');

let sqlTable = `CREATE TABLE IF NOT EXISTS settings
    (id INTEGER PRIMARY KEY NOT NULL,
    key TEXT,
    value TEXT);`;
let sqlTableUser = `CREATE TABLE IF NOT EXISTS accounts 
    (id INTEGER PRIMARY KEY NOT NULL,
    uid TEXT,
    username TEXT,
    permissions TEXT,
    first_name TEXT,
    last_name TEXT,
    date_reg DATE,
    balance INTEGER,
    referal TEXT,
    ban INT)`;
let sqlTableMail = `CREATE TABLE IF NOT EXISTS mail
    (sys_id INTEGER PRIMARY KEY NOT NULL,
    id TEXT,
    title TEXT,
    date DATE,
    text TEXT);`;

let sqlSettings = `INSERT INTO settings(id, key, value) VALUES(null, 'app_lang', 'ru');`;

let sqlMail = `INSERT INTO mail(sys_id, id,title, date, text) VALUES(null, 'all', 'System first nofity', DATE('now'),'Hello, this is your first notify');`;
let sqlMailS = `INSERT INTO mail(sys_id, id,title, date, text) VALUES(null, 'all', 'Второе системное сообщение', DATE('now'),'Привет, это опять системное сообщение');`;

console.log('create table');
db.run(sqlTable).run(sqlTableUser).run(sqlTableMail);

function dbrun(){
    console.log('insert settings');
    db.run(sqlSettings).run(sqlMail).run(sqlMailS);
    db.close();
    console.log('Finish!');
}
setTimeout(dbrun,2000);