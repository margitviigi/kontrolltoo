const data = require('./data/meals.json')

const getAllData = (req, res) =>{
    let sql = 'SELECT * FROM retseptid'
    db.query(sql, (error, result) => {
        res.json(result)
        //res.render('index', {
        //    retseptid: result
        //} )
    })
} 

module.exports = { getAllData } 