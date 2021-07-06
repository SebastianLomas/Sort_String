let $input = document.getElementById('user_input')
let $button = document.getElementById('button')
let $result = document.getElementById('result')
let string = ""
let final_array = []

$button.addEventListener('click',e => {
    string = $input.value
    final_array = sortString(string)
    insertIntoHtml($result,final_array)
})

document.addEventListener("keypress",e => {
    if(e.key == "Enter") {
        string = $input.value
        final_array = sortString(string)
        insertIntoHtml($result,final_array)
    }
})