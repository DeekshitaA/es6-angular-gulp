var del = require('del');
 
module.exports = function(){
    del.sync(['dist']);
};