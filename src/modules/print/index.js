import React, { Component } from 'react'

function Person(name, age) {
  this.name = name
  this.age = age
}

export default class Print extends Component {
  constructor() {
    super()
    this.state = {
      data: 'name',
    }
  }

  _Promise = (name) => {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve({ name: 'll' })
        return
      }
      reject({ error: '错误' })
    })
  }

  componentDidMount() {
    let canvasView = this.refs.canvasView
    let context
    // console.log(canvasView)
    if (canvasView.getContext) {
      context = canvasView.getContext('2d')
      context.beginPath()
      context.arc(100, 100, 50, 0, 2 * Math.PI, false)
      // context.arcTo(15, 10, 15, 15, 20)
      context.moveTo(100, 100)
      context.lineTo(100, 70)

      context.moveTo(100, 100)
      context.lineTo(80, 100)

      context.stroke()
    }
    let handler = {
      message: 'names',
      click: function (event) {
        alert(this.message)
      },
    }

    let print = document.getElementById('name')
    print.addEventListener('click', handler.click.bind(handler))

    setTimeout(() => {
      let print = this.refs.div
      let left = parseInt(print.style.left) + 5
      print.style.left = `${left}px`
    }, 50)
  }

  render() {
    this._Promise(true)
      .then(data => console.log(data))
    let names = new Person('lilei', 30)
    console.log(names)
    return (
      <div>
        <p id="name">print</p>
        <canvas id="canvas" width="200" height="200" ref="canvasView">
          不支持canvas
        </canvas>
        <div ref="div" className="names" draggable="true" style={{ position: 'relative', width: '100px', height: '100px', left: 0, background: 'blue' }}>

        </div>
      </div>
    )
  }
}