module.exports.execute = (template,data) => { 
    for(var k in data){
        //template = template.replace('{'+k+'}', data[k]);
        template = template.split('{'+k+'}').join(data[k]);
    }
    return template;
}