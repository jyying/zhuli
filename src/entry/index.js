import dva from 'dva'
import appModel from '../modules/app.m.js'

import Router from '../router'

const app = dva()

app.model(appModel)

app.router(Router)

app.start('#root')