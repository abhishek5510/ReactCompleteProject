const express = require('express');
const app = express();
const mysql = require('mysql');
const cors=require('cors');
var session = require('express-session');
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
app.get('/authrto',function(request,response){
    var data=JSON.parse(request.query.entered_data)
    console.log(data)
    var username = data.username
      var password = data.password;
      if (username && password) {
          connection.query('SELECT name,rolename FROM user_master WHERE username = ? AND passwordd = ?', [username, password], function(error, results, fields) {
              
              if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.send(results)
              } else {
            response.sendStatus(404)
              }			
          });
      } else {
          response.send('Please enter Username and Password!');
          response.end();
      }
})
app.get('/check',function(request,response){
    var data=JSON.parse(request.query.entered_data)
    console.log(data.search)
    connection.query('select count(*) as count from registration_details where veh_no=?',[data.search],function(error,results,field){
        if(error){
            console.log(error)
        }
        else{
            if(results[0].count === 1){
                response.sendStatus(200)
            }
            else{
                response.sendStatus(404)
            }
        }
    })
})
app.get('/info',function(request,response){
    var list = {};
    var data=JSON.parse(request.query.veh_no)
    connection.query('select o.*,oo.offence_type from offence_details o, offence oo where o.veh_no=? and o.offence_id=oo.offence_id',[data],function(error,results,fields){
        if(error){
            console.log(error)
        }
        else{
            list['data'] = results
            connection.query('select sum(penalty) as penalty,count(payment) as totalPayment from offence oo,offence_details o where o.payment=? and o.offence_id=oo.offence_id and o.veh_no=?',['Unpaid',data],function(error,results,field){
                if(error){
                    console.log(error)
                }
                else{
                    list['data1'] = results;
                    console.log(list)
                    response.send(list)
                }
            })
        }
    })
})
app.post('/payment',function(request,response){
    connection.query('update offence_details set payment=?,vehicle_status=? where veh_no=? and payment=?',[request.body.report.payment,request.body.report.custody,request.body.report.veh_no,'Unpaid'],function(error,result,field){
        if(error){
          console.log(error)
        }
        else{
          response.sendStatus(200)
        }
      })
})

app.post('/addoffence',function(request,response){
    connection.query('call addOffence(?,?,?)',[request.body.data.oname,request.body.data.cars,request.body.data.penalty],function(error,result,field){
        if(error){
            console.log(error)
        }
        else{
            response.sendStatus(201);
        }
    })
})
app.get('/userlogin',function(request,response){
    var data=JSON.parse(request.query.info)
    connection.query('select owner_id from owner_details where owner_id=? and dob=? ',[data.ownerid,data.dob],function(error,results,fields){
        if (results.length > 0) {
            request.session.loggedin = true;
            response.send(results)
            // console.log(results)
          } else {
        response.sendStatus(404)
          }			
          // response.end()
    })
})
app.get('/userinfo',function(request,response){
    var list = {};
    connection.query('select concat(fname," ",lname) AS FullName,pancard_no from owner_details where owner_id=?',[request.query.info],function(error,results,field){
        if(error){
            console.log(error)
        }
        else{
            list['data']=results
            connection.query('select veh_no from registration_details where owner_id=?',[request.query.info],function(error,results,filed){
                if(error){
                    console.log(error)
                }
                else{
                    list['data1']=results
                    var listLength = list.data1.length;
                    var i=0
                    var str1=[]
                    var str = 'select o.*,oo.offence_type from offence_details o left join offence oo on o.offence_id=oo.offence_id where '
                    while(listLength>0){
                        str1[i] ="veh_no=\""+list.data1[i].veh_no+"\""
                        i++;
                        listLength--;
                    }
                    var st = str1.join(' or ')
                    str+=st
                    connection.query(str,function(error,results,fields){
                        if(error){
                            console.log(error)
                        }
                        else{
                            list['offence'] = results
                            response.send(list)
                        }
                    })
                }
            })
        }
        
    })
})
app.post('/updateoffence',function(request,response){
    connection.query('update offence set penalty=? where offence_type=?',[request.body.data.penalty,request.body.data.cars],function(error,results,field){
        if(error){
            response.sendStatus(404)
        }
        else{
            response.sendStatus(200)
        }
    })
})
app.listen(3002,function(){
    console.log('Server Started')
})