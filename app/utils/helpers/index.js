export const formatDate = (date) => {
    let output = new Date(date);
    return output.substring(0, 2) + '/' + output.substring(2, 4) + '/' + output.substring(4, 8);
}