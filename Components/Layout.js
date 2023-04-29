import React from 'react'

// 
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children }) {
    return (
        <> 
            <Head>
                    <title>Tic Tac Toe</title>
                <meta name="title" content='Memory Game' />
                <meta name="description" content='Fun and Quick Tic Tac Toe Game' />
                <meta name="keywords" content='Tic Tac Toe, Tic-Tac-toe, tic tac toe game, Memory Game, memory, game, games, anime, food, programming, stream, viper, xvpc, quick game, quick games, fun game, fun games' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
    
                {/* ICONS */}
                <link rel="shortcut icon" type="image/x-icon" href='./favicon/favicon.ico' />
                <link rel="apple-touch-icon" sizes="180x180" href='./favicon/apple-touch-icon.png' />
                <link rel="icon" type="image/png" sizes="32x32" href='./favicon/favicon-32x32.png'/>
                <link rel="icon" type="image/png" sizes="16x16" href='./favicon/favicon-16x16.png'/>
            </Head>

            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className='d-flex flex-column justify-content-between align-items-center min-vh-100'>
                <main className='my-5 p-2'>
                    {children}
                </main>

                <footer className="bg-black p-2 w-100 d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
                    <div className='footer-credit mw-25 d-flex flex-row flex-wrap justify-content-center align-items-center gap-2'>
                        <p className='p-0 m-0'>Created By:<span className='ms-2 fw-bold p-0 m-0'>Viper</span></p> |
                        <Link style={{width: '30px', height: '30px'}} className='bg-dark overflow-hidden rounded-1' title='Portfolio' href='https://xvpc.dev' target='_blank'><Image className='img-fluid' src={'https://i.ibb.co/9WxCSdZ/android-chrome-512x512.png'} width={512} height={512} alt='Portfolio Icon'/></Link>
                    </div>
                </footer>
            </div>
        </>
    )
}
