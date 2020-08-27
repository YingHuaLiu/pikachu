import string from './css.js'

const player = {
    id: null,
    timeInterval: 100,
    n: 1,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    init: () => {
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.play()
        player.bindEvent()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvent: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[player.events[key]]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n <= string.length) {
            player.ui.demo.innerText = string.substring(0, player.n)
            player.ui.demo2.innerHTML = string.substring(0, player.n)
            player.ui.demo.scrollTop = player.ui.demo.scrollHeight
        }
    },
    play: () => {
        player.id = setInterval(player.run, player.timeInterval)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.timeInterval = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.timeInterval = 100
        player.play()

    },
    fast: () => {
        player.pause()
        player.timeInterval = 10
        player.play()

    }
}
player.init()