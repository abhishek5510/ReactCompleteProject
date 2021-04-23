const express = require("express");
const app=express();
const mysql = require('mysql');
const cors=require('cors');
var session = require('express-session');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const { request, response } = require("express");

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'xxxdon0306',
	database : 'traffic_offence_system'
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json()) 

app.use(cors());

app.post('/post',function(request,response){
    var obj = JSON.parse(request.body.user_info);
    connection.beginTransaction(function(err){
      if(err){
        throw err;
      }
      connection.query("call insertion(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[obj.vehicleNumber,obj.vehicleType,obj.eno,obj.mno,obj.vname,obj.vcolor,obj.mn,obj.dom,obj.noc,obj.cc,obj.fused,obj.dop,obj.disname,obj.fname,obj.lname,obj.dob,obj.mobileno,obj.gender,obj.email,obj.tadd,obj.padd,obj.pcode,obj.occu,obj.pcard,obj.addp],function(error,results,field){
        if(error){
          connection.rollback(function(){
            response.send('Transaction Incomplete')
            // throw error
            
          })
        }
        else{
          
            response.send('Transaction Completed')
            // console.log(result)
        }
        connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
          });
        }
    })
  })
})
})

app.get('/no',function(request,response){
  connection.query('select * from offence',function(error,results,field){
    if(error){
      console.log(error);
    }
    else{
      response.send(results)
      // console.log(results);
    }
  })
})

app.get('/history',function(request,response){
  var obj = JSON.parse(request.query.info);
  var json = {};
  connection.query('select o.offence_type,o.penalty from offence o,offence_details od where o.offence_id=od.offence_id and od.payment=? and od.veh_no=?',["unpaid",obj.vnumber],function(error,results,field){
    if(error){
      console.log(error)
    }
    else{
      results.forEach(element => {
        var first = element.offence_type;
        var sec = element.penalty;
        if(first in json)
          json[first] = json[first] + sec;
        else
          json[first] = sec;
      });
      var obj1={};
      obj1["offence"] = json;
      obj1["length"] = results.length;
      response.send(obj1)
    }
  })
})

app.get('/checker',function(request,response){
  var obj=JSON.parse(request.query.info)
  connection.query('select veh_no from registration_details where veh_no=?',[obj.vnumber],function(error,results,field){
    if(results.length===1){
      console.log(results.length)
      connection.query('select veh_no from offence_details where vehicle_status=? and veh_no=?',['Vehicle Seized',obj.vnumber],function(error,results,field){
        console.log(results.length)
        if(results.length>=1){
          // response.status(403).send('403')
           response.sendStatus(403)
          // response.status(StatusCodes.FORBIDDEN).send(ReasonPhrases.Forbidden);
        }
        else{
          response.sendStatus(200)
        }
      })
    }
    else{
      response.sendStatus(404)
    }
  })
})

app.get('/data',function(request,response){
  console.log(request.query.entered_data)
  connection.query('select v.*,o.*,r.date_of_purchase,r.distributer_name from owner_details o,vehicle_details v,registration_details r where veh_no=? and o.owner_id=r.owner_id and v.engine_no=r.engine_no',[request.query.entered_data],function(error,result,field){ 
    if(result.length === 0){
      response.sendStatus(404)
    }
    else{
      response.send(result)
    }
  })
})

app.post('/already',function(request,response){
  var obj=JSON.parse(request.body.user_info)
  console.log(obj)
  connection.beginTransaction(function(err){
    if(err){
      throw err;
    }
    connection.query("call existingAlready(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[obj.oid,obj.vnumber,obj.vtype,obj.eno,obj.mno,obj.vname,obj.vcolor,obj.mname,obj.dom,obj.noc,obj.cc,obj.fu,obj.dop,obj.dname],function(error,results,field){
      if(error){
        connection.rollback(function(){
          response.send(406)
          // throw error
          
        })
      }
      else{
        response.sendStatus(201)
      }
      connection.commit(function(err) {
      if (err) { 
        connection.rollback(function() {
        });
      }
  })
})
})
  
})

app.get('/getOwnerId',function(request,response){
  connection.query('select owner_id from owner_details',function(error,result,field){
    var obj = result.map(a=>a.owner_id)
    console.log(obj)
    response.send(obj)
  })
})

app.post('/report',function(request,response){
  console.log(request.body.report)
  connection.query("insert into offence_details values(?,?,?,?,?,?,?)",[request.body.report.vnumber,request.body.report.datetime,request.body.report.place,request.body.report.sno,request.body.report.rb,request.body.report.custody,request.body.report.payment],function(error,resuls,fields){
    if(error){
      console.log(error)
    }
    else{
      response.sendStatus('201')
    }
  })
})

app.post('/submit',function(request,response){
  connection.query("insert into offence_details values(?,?,?,?,?,?,?)",[request.body.report.vnumber,request.body.report.datetime,request.body.report.place,request.body.report.sno,request.body.report.rb,request.body.report.custody,request.body.report.payment],function(error,resuls,fields){
    if(error){
      console.log(error)
    }
    else{
      connection.query('update offence_details set payment=?,vehicle_status=? where veh_no=?',[request.body.report.payment,request.body.report.custody,request.body.report.vnumber],function(error,result,field){
        if(error){
          console.log(error)
        }
        else{
          response.sendStatus(200)
        }
      })
    }
  })
})

app.get('/getOffence',function(request,response){
  connection.query('select offence_type from offence',function(error,results,field){
    response.send(results)
  })
})

app.listen(3001,()=>{
    console.log("Server has started");
})