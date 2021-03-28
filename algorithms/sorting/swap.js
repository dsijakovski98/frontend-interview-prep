module.exports = (list, i, j) => {
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
    // return list
}