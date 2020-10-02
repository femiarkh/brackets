module.exports = function check(str, bracketsConfig) {
    'use strict';    

    const array = str.split('');
    
    let configIndex;   

    for (let i = 0; i < Math.floor(array.length / 2); i++) {

        bracketsConfig.forEach((item, index) => {
            if (item[0] === array[i]) {
                configIndex = index;                             
            }            
        }); 

        if (!configIndex && configIndex !== 0) {
            return false;
        }
        const closingIndex = array.indexOf(bracketsConfig[configIndex][1], i + 1);
        if (closingIndex === -1) {
            return false;
        }
        if (closingIndex === i + 1) {
            array.splice(i, 2);
            
            return check(array.join(''), bracketsConfig);            
        }
    }       
    
    return array.length === 0 ? true : false;
}
