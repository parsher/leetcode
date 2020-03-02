/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    const arr = new Array(numRows).fill(0).map(() => new Array());
    
    let currentRow = 0;
    let down = true;
    
    for (let i = 0; i < s.length; i++) {
        arr[currentRow].push(s[i]);
        if (currentRow === numRows - 1) {
            down = false;
        } else if (currentRow === 0) {
            down = true;
        }
        
        currentRow += (down === true ? +1 : -1);
    }
    
    return arr.reduce((acc, cur) => acc.concat(cur), []).join("");
};