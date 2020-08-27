import string from './css.js'

let n = 1
demo.innerText = string.substring(0, n)
demo2.innerHTML = string.substring(0, n)

setInterval(() => {
    n += 1
    if (n <= string.length) {
        demo.innerText = string.substring(0, n)
        demo2.innerHTML = string.substring(0, n)
        demo.scrollTop = demo.scrollHeight
    }
}, 0)