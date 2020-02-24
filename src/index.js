module.exports = function reverse (n) {
    n = String(n);
    n.split("");
    let a = [];
    for(let i=0;i<n.length;i++)
    {
        if(n[i]>=0)a.unshift(n[i]);
    }
    return a.join("");
}
