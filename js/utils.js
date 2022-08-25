function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || typeof value === null);
}