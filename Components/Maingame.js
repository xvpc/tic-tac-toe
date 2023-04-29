import React, { useEffect } from 'react'

// Bootstrap
import { Button } from 'react-bootstrap'

export default function MainGame() {

    useEffect(() => {
        let playing = true
        let turn = 'X'
        let winner = ''
        let winnerState = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        const gameTurn = document.querySelector('.game-turn')
        const resetButton = document.querySelector('.reset-button')
        const items = document.querySelectorAll('.game-items')

        const resetGame = () => {
            [...items].map((item) => {
                item.classList.remove('active')
                item.classList.remove('bg-primary')
                item.classList.remove('bg-warning')
                item.classList.remove('bg-success')
                item.classList.add('bg-secondary')
                item.setAttribute('item', '')
                item.innerText = ''
            })
            winner = ''
            turn = 'X'
            gameTurn.textContent = `${turn}'s Turn`
            playing = true
        }

        resetButton.addEventListener('click', resetGame)

        // 
        items && [...items].map((item) => {
            // Click Event
            item.addEventListener('click', () => {
                if(playing && turn === 'X' && !item.classList.contains('active')){
                    item.classList.add('active')
                    item.classList.remove('bg-secondary')
                    item.classList.add('bg-primary')
                    item.setAttribute('item', 'X')
                    item.innerText = 'X'
                    turn = 'O'
                    gameTurn.textContent = `${turn}'s Turn`
                }else if(playing && turn === 'O' && !item.classList.contains('active')){
                    item.classList.add('active')
                    item.classList.remove('bg-secondary')
                    item.classList.add('bg-primary')
                    item.setAttribute('item', 'O')
                    item.innerText = 'O'
                    turn = 'X'
                    gameTurn.textContent = `${turn}'s Turn`
                }

                // Check Winner
                if(playing){
                    if(!winner && items[0].classList.contains('active') && items[1].classList.contains('active') && items[2].classList.contains('active') && items[3].classList.contains('active') && items[4].classList.contains('active') && items[5].classList.contains('active') && items[6].classList.contains('active') && items[7].classList.contains('active') && items[8].classList.contains('active')){
                        [...items].map((item, index) => {
                            item.classList.remove('bg-primary')
                            item.classList.add('bg-warning')
                        })
                        console.log("It's A Draw!")
                        gameTurn.textContent = "It's A Draw!"
                        setTimeout(() => {
                            gameTurn.textContent += '.'
                        }, 500)
                        setTimeout(() => {
                            gameTurn.textContent += '.'
                        }, 1000)
                        setTimeout(() => {
                            gameTurn.textContent += '.'
                        }, 1500)
                        setTimeout(() => {
                            resetGame()
                        }, 2000)
                        playing = false
                        return
                    }
                    winnerState.forEach((state) => {
                        const checkX = state.every((cell) => items[cell].getAttribute('item') === 'X')
                        const checkO = state.every((cell) => items[cell].getAttribute('item') === 'O')
                        if(checkX){
                            state.map((cell) => {
                                if(items[cell].getAttribute('item') === 'X'){
                                    items[cell].classList.remove('bg-primary')
                                    items[cell].classList.add('bg-success')
                                }
                            })
                            console.log('X winner')
                            winner = 'X'
                            gameTurn.textContent = 'X Winner'
                            setTimeout(() => {
                                gameTurn.textContent += '.'
                            }, 500)
                            setTimeout(() => {
                                gameTurn.textContent += '.'
                            }, 1000)
                            setTimeout(() => {
                                gameTurn.textContent += '.'
                            }, 1500)
                            setTimeout(() => {
                                resetGame()
                            }, 2000)
                            playing = false
                            return
                        }
                        else if(checkO){
                            state.map((cell) => {
                                if(items[cell].getAttribute('item') === 'O'){
                                    items[cell].classList.remove('bg-primary')
                                    items[cell].classList.add('bg-success')
                                }
                            })
                            console.log('O winner')
                            winner = 'O'
                            gameTurn.textContent = 'O Winner'
                            setTimeout(() => {
                                gameTurn.textContent += '.'
                            }, 500)
                            setTimeout(() => {
                                gameTurn.textContent += '.'
                            }, 1000)
                            setTimeout(() => {
                                gameTurn.textContent += '.'
                            }, 1500)
                            setTimeout(() => {
                                resetGame()
                            }, 2000) 
                            playing = false
                            return
                        }
                    })
                }
            })
        })

        return () => {
            resetButton.removeEventListener('click', resetGame)
        }
    }, [])

    // 
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center gap-4'>
            <h1 className='game-title fw-bold display-2'>Tic Tac Toe</h1>

            <div className='d-flex flex-row justify-content-center align-items-center gap-4'>
                <p className='game-turn p-0 m-0 fw-bold text-dark fs-5'>{"X's Turn"}</p>
                <Button className='reset-button py-1 m-0' variant="danger">Reset</Button>
            </div>
            
            <ul className='game-container text-center fw-bold fs-4'>
                <li cell='1' item='' className='game-items bg-secondary'></li>
                <li cell='2' item='' className='game-items bg-secondary'></li>
                <li cell='3' item='' className='game-items bg-secondary'></li>
                <li cell='4' item='' className='game-items bg-secondary'></li>
                <li cell='5' item='' className='game-items bg-secondary'></li>
                <li cell='6' item='' className='game-items bg-secondary'></li>
                <li cell='7' item='' className='game-items bg-secondary'></li>
                <li cell='8' item='' className='game-items bg-secondary'></li>
                <li cell='9' item='' className='game-items bg-secondary'></li>
            </ul>
        </div>
    )
}
