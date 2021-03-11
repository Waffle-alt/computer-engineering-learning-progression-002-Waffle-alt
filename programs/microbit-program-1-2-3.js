// Modified Example 1.1.10 So that the snake starts in the middle and works its way up 
// to the top left corner. 

let path = [
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], // top row to the right
    [4, 1], [4, 2], [4, 3], [4, 4],         // right column down
    [3, 4], [2, 4], [1, 4], [0, 4],         // bottom row to the left
    [0, 3], [0, 2], [0, 1],                 // left column up
    [1, 1], [2, 1], [3, 1],                 // top but 1 row to the right (remaining headitions)
    [3, 2], [3, 3],                         // right but 1 column down (remaining headitions)
    [2, 3], [1, 3],                         // bottom but 1 row to the left (rem head)
    [1, 2],                                 // left but 1 col up (rem head)
    [2, 2]                                  // center
]

const SNAKE_LEN: number = 7                 // snake length parameter
let snake: number[] = []                    // snake represented by trajectory indices
for (let i = - SNAKE_LEN; i < 0; i++)
    snake.push(i)                           // populate snake array

// the snake goes back and forth along the path
basic.forever(function () {
    let head: number = 24
    let tail: number
    while (head >= 0) {
        led.plot(path[head][0], path[head][1])
        snake.push(head--)
        tail = snake.removeAt(0)
        if (tail >= 0)
            led.unplot(path[tail][0], path[tail][1])
        basic.pause(200)
    }

    // reverse the snake "in place"
    head = tail
    tail = 0
    while (tail < 16) {
        if (head >= 0)
            led.plot(path[head][0], path[head][1])
        snake.insertAt(0, head++)
        tail = snake.pop()
        led.unplot(path[tail][0], path[tail][1])
        basic.pause(200)
    }
})
