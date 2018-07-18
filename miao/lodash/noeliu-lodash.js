
var noeliu = {
    chunk: function(array, size) {
        var result = []
        for(var i = 0;i < array.length;i+=size){
            result.push(array.slice(i,i+size))        
        }
        return result
    },
    compact: function(array){
        var result = []
        for(var i = 0;i < array.length;i++){
            if(array[i]){
                result.push(array[i])
            }
        }
        return result
    },
    property: function(propName){
        return function(obj){
            return obj[propName]
        }
    }
}
