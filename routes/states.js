let express = require('express')
let States = require('../models').States

let router = express.Router()

// fetch all of the states
router.get('/states', function(req, res, next) {
  States.findAll({ order: ['name']}).then( states => {
    return res.json(states)
  })
  .catch( err => next(err))
})

// example: state/Minnesota, get all info about one state.
router.get('/state/:name', function(req, res, name) {
  let stateName = req.params.name
  States.findOne( {where: { name: stateName} } )
  .then( state => {
    if (state) {
      return res.json(state)
    } else {
      return res.status(404).send('State not found')
    }
  })
  .catch(err => next(err))
})

// patch route to update a state - visited or not visited.
// this will match any state name, ex. Minnesota, Wisconsin and so on.
// example: request to states/Iowa
router.patch('/states/:name', function(req, res, next) {
  // req.params is any part of this URL that matches the :name.
  // so req.params.name matches the :name in the patch.
  let stateName = req.params.name // example: Iowa

  let stateVisited = req.body.visited // example: true

  // in the database, find name that equals to stateName.
  // example: finding row in the database where name = Iowa, update visited to be true for Iowa
  States.update( {visited: stateVisited}, { where: {name: stateName}})
  .then( rowsUpdated => {
    let numberOfRowsUpdated = rowsUpdated[0]
    // if state is in database, send okay.
    if (numberOfRowsUpdated == 1) {
      return res.send('Okay')
    }
    // else, send 404 state not found.
    return res.status(404).send('State not found')
  })
  // or different problem, pass this to general error handler
  .catch( err => next(err) )
})

module.exports = router