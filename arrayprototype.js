
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */



Array.prototype.last = function() {
    //       find the last element of the arr 
       return this.length === 0 ? -1 : this.pop();
        
    };

    
    

