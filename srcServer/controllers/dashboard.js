const db = require('../models')

const getDashboard = async (req, res) => {
  const carlist = await db.carlist.findAll({ })
  if (!req.user) {
    return res.render('table', { user: res.locals.user, flag: false, carlist:carlist })
  }
  return res.render('table', { user: res.locals.user, flag: true, carlist:carlist })
}
module.exports = {
  getDashboard
}