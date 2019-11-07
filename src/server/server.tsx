import Koa from 'koa'
import Router from 'koa-router'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../components/Home'

const app = new Koa()
const router = new Router()

const content = renderToString(<Home />)

router.get('/', (ctx, next) => {
    ctx.body = (`
        <html>
            <header>
                <title>Hello SSR</title>
            </header>
            <body>
                ${ content }
            </body>
        </html>
    `
    )
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(4321)