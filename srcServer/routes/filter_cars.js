const filterCars = require('../controllers/filterCars')

module.exports = (router) => {
  router.route('/')
    .get(filterCars.getCarData)
};