import Koa from 'koa'
import Router from 'koa-router'
import React from 'react'
//在服务器端渲染页面要通过react-dom/server下的renderToString 方法
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