const dashboard= require('../controllers/dashboard')

module.exports = (router) => {
  router.route('/')
    .get(dashboard.getDashboard)
};