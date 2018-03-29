require("dotenv").config();

module.exports = {

  //could pass dev or production as variable of function for different db connections.
  getDbConnectionString: function () {
    return 'mongodb://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@ds123129.mlab.com:23129/points-kanban';
  }

}
