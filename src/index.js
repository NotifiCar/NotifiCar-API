const express = require('express')
const { Pool } = require('pg')

const PORT = process.env.PORT || 5000

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})

const app = express()

app.get('/', (req, res) => {
    res.send('It\'s working')
})

app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM test_table')
        res.send(result)
        client.release()
    } catch (err) {
        console.error(err)
        res.send('Error ', err)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
