const WORD_CAP = 7

var content = {
    text: "",
    condensedTo: 0,
}

export nextContent = () => {
    let condensedContent
    let contentArray = content.text.split(" ")

    for (var i = content.condensedTo; i < content.condensedTo + WORD_CAP; i++) {
        condensedContent += contentArray[i] + " "
    }
    return condensedContent
}