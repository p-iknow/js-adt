// 시작 숫자 부터 끝 숫자까지를 포함하는 배열을 만드는 함수
const makeArray = (start = 1, end = 9) => {
    const array = [];
    for (start; start < end + 1; start++) {
        array.push(start)
    }
    return array
}

const binarySearch = (list, item) => {
    let low = 0
    let high = list.length
    let mid, guess;
    while( low < high || low === high) {
        mid = Math.floor((low + high)/2)
        guess = list[mid]
        console.log(`low:${low}, high:${high} , Mid: ${mid}, guess: ${guess}, itme: ${item}`)
        if(guess === item) return mid;

        if(guess > item) high = mid - 1; 

        else low = mid + 1
    }
    return "there is no item";
}

binarySearch(makeArray(1,30), 1);