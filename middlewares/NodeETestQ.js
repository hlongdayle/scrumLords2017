//this file executes test-queries towards mysql

var dbHelper = require('../helpers/db');

module.exports = {
    getNodeETest : function (req, res){
        dbHelper.dbQuery(req, res, "select * from NodeETest");
    },
    putNodeETest : function(req,res){
        dbHelper.dbQuery(req,res, "UPDATE NodeETest set notat = 'sjøhezt er bezt' where id = 10;");
        console.log("NodeETest PUT");
    },
    postNodeETest : function(req,res){
        var post = {notat: req.body.notat};
        dbHelper.postdbQuery(req,res, "insert into NodeETest set ?", post);
        console.log("NodeETest POST");
    },
    getEmployeeOvertime : function (req,res) {
        dbHelper.dbQuery(req,res,"select * from Employee_Overtime");
    },
    getPersonalInfo : function (req, res) {
        dbHelper.dbQuery(req,res,"select * from Employee");
    },
    getBatman : function(req,res){
        dbHelper.getdbQuery(req,res, "select * from Batman");
    },
    getJustaTest : function(req,res){
        dbHelper.getdbQuery(req,res, "select phone_nr, employee_id, email, name, address from Employee where employee_id = ?");
    },
    putJustaTest : function(req,res){
        dbHelper.postdbQuery(req,res, "update Emplyee set phone_nr = ?,email= ?, address = ? where employee_id = ? ",[req.body.phone_nr,req.body.email,req.body.address,req.body.employee_id]);
    }

}

