const sortString = function (user_string) {
    let sequency = user_string.split(',').map(e => {
        return parseFloat(e)
    })
    let main_number = {
        value: 0,
        currentPosition: 0,
        nextPosition: 0
    }
    let second_number = {
        value: 0,
        currentPosition: 0,
        nextPosition: 0
    }

    let sequency_length = sequency.length
    //mnp = Main Number Position
    for(let mnp = 0;mnp < sequency_length;mnp++) {
        main_number.value = sequency[mnp]
        main_number.currentPosition = mnp
        //snp = Second Number Position
        for(let snp = 0;snp <sequency_length;snp++) {
            main_number.nextPosition = snp
            second_number.value = sequency[snp]
            second_number.currentPosition = snp
            second_number.nextPosition = main_number.currentPosition

            if(main_number.value > second_number.value) {
                sequency[main_number.nextPosition] = main_number.value
                sequency[second_number.nextPosition] = second_number.value
                main_number.currentPosition = second_number.currentPosition
            }
        }
        //debugger
        if(sequency[mnp] !== main_number.value) {
            mnp = -1
        }

        for(let i = 0;i < sequency_length;i++) {
            if(sequency[i] > sequency[i+1]) {
                break
            } else {
                if(sequency[i+2] === undefined) {
                    mnp = sequency_length
                    return sequency
                } else {
                    continue
                }
            }
        }
    }
}

const insertIntoHtml = function(tag, text) {
    tag.innerHTML = text
}