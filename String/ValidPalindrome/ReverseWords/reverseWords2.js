/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    let endOfTheWordFound = false
    let mainResult = ''
    let word = ''

    for (let i = s.length - 1; i >= 0; i--) {

        let char = s[i]
        if (char == ' ') {
            if (word != '') {

                if (mainResult == '') {
                    mainResult = word
                } else {
                    mainResult = mainResult + ' ' + word
                }
                word = ''
            }
        }

        else {
            word = char + word
        }
    }

    if (word != '') {
        if (mainResult == '') {
            mainResult = word
        } else {
            mainResult = mainResult + ' ' + word
        }
    }
    return mainResult
};