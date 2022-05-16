const { request } = require('express')
const { response } = require('express')
const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())

const orders = []

const checkOrderId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Order not found!" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

const methodUrl = (request, response, next) => {
    const method = request.method

    const url = request.path

    console.log("Method:", "[", method, "]", "-", "URL:", url)

    next()
}

app.get('/orders', methodUrl, (request, response) => {
    return response.json(orders)
})

app.get('/orders/:id', checkOrderId, methodUrl, (request, response) => {

    const index = request.orderIndex

    return response.json(orders[index])
})

app.post('/orders', methodUrl, (request, response) => {

    const { id } = request.params

    const { order, clienteName, price, status } = request.body

    const requests = { id: uuid.v4(), order, clienteName, price, status }

    orders.push(requests)

    return response.status(201).json(requests)
})

app.put('/orders/:id', checkOrderId, methodUrl, (request, response) => {

    const index = request.orderIndex

    const id = request.orderId

    const { order, clienteName, price, status } = request.body

    const updateOrder = { id, order, clienteName, price, status }

    orders[index] = updateOrder

    return response.json(updateOrder)
})

app.delete('/orders/:id', checkOrderId, methodUrl, (request, response) => {

    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})

app.patch('/orders/:id', checkOrderId, methodUrl, (request, response) => {

    const index = request.orderIndex

    const id = request.orderId

    const { order, clienteName, price } = orders[index]

    const orderStatus = { id, order, clienteName, price, status: 'Pronto' }

    orders[index] = orderStatus

    return response.json(orderStatus)
})


app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})