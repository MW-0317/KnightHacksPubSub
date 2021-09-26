const express = require('express');
const axios = require('axios').default;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {UserModel, UserModelSchema} = require("./schemas/Users.js")
dotenv.config()

const accountSid = process.env.TWILIO_SID; 
const authToken = process.env.TWILIO_SEC; 
const client = require('twilio')(accountSid, authToken); 

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const mongoURI = process.env.MONGOURI;
const port = process.env.PORT;
const twil_ser_sid = process.env.TWILIO_SERVICE_SID;

const cors = require('cors');
app.use(cors());


mongoose.connect(mongoURI).catch(err => console.log(err));
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongo IS OPEN");
});


// setInterval(()=>{
//     var date = new Date(Date.now());
//     var day = date.getUTCDay();
//     if (day == 3){
//         var onSale = [];
//         axios.get("https://api.pubsub-api.dev/onsale/")
//             .then(aresSale => {
//                 aresSale.forEach(item => {
//                     if (item.onSale == "True"){
//                         onSale.push(aresSale);
//                     }
//                 })
                
//             }).catch(err => {
//                 console.log(err);
//             });




//         var User = mongoose.model('UserModel', UserModelSchema);
//         var phone_num = req.body.phone;
//         User.find({}, '', function(err, users){
//             if (err) {console.log(err);return;}
//             for(const user of users){
//                 for (const item of onSale){
//                     for (const userItem of user.pubsubs){
//                         if (item.query_name == userItem){
//                             client.messages 
//                                 .create({ 
//                                     body: '',  
//                                     messagingServiceSid: 'MG25019591fb61db91b440110144d12f11',      
//                                     to: user.phone_number 
//                                 }) 
//                                 .then(message => console.log(message.sid)) 
//                                 .done();
//                         }
//                     }
//                 }
                
//             }
//         });
//     }
// }, 10000);


app.get('/', (req, res) => {
    var config = {
        method: 'get',
        url: 'https://services.publix.com/api/v1/storelocation?types=R,G,H,N,S&option=&count=15&includeOpenAndCloseDates=true&isWebsite=true&zipCode=32816',
        headers: { 
          'Cookie': '_abck=6C0B3BA7E91DF96F094657431DAA5D70~-1~YAAQjstWQIci5Bp8AQAA6d0yHgaBF9dNaVIxhrvRJ2HEMu8ifviXlHR8jdcDfukOy9w8rc5sN5k3JkzU95khc9Bnu6e+mbpji2xH3irHV+U0Ni81Iv2cA+HaDdk5xGulgeh1pdmGo5T3phvkftqc4e3364eLIjEIxy39lCB312vQ0lhy2z3y1CGUdt0f4ShwUWjU02kWoOh1HOFyTfeZknpLTBsp8Ot1ieJDb95f3rdPd1t+zo1v6nZLffGu3i1QMHKJWWKpHfBQ3+d2+w1BjoSj5t74I38gWRQJ1uXHMgsrbnOCqe8GiT2qujUNrqIO8YJ5BrOvmP4Ir80NJILYfZxYUQ+dp7af+iPMaxkk2JrCrZINXptM1do=~-1~-1~1632597737; bm_sz=356AFB1DA773A5D1762D259B6094317F~YAAQjstWQIgi5Bp8AQAA6d0yHg2PyhsFbRidMwwothWk+buZiBR1b7HOXmd0VgL+zzgt+r7OJ84w9WrcVUU9IJCQS0CZaDOK/+6JYTBdYIifxEs/vOAAtpmKt3bi17YoaATE/eGwSB97y8/5pJ+QlKSpthxhSRBFsZqJV9t2qD00F8UBvjnSVWTqUxBDy0+FQi4tAh+7dSRPcamohsj3Rb1GuyJysEDLHwDgmPQVqR5tJqIJRonzqHfrQ/g7ofnkVlTmqTYLfaVdUiKgDFsuPFNqqeX0MBwRJUkd9/AmrPdFyFU=~3618614~3421495'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    // axios.get(url)
    //     .then(ares => {
    //         res.send(ares.data)
    //     }).catch(err => {
    //         console.log(err);
    //     })
});

app.get('/subs', (req, res) => {
    // axios.get("https://api.pubsub-api.dev/allsubs/")
    //     .then(aresSub => {
    //         aresSubData = aresSub.data;
    //     }).then(() => {
    //         axios.get("https://api.pubsub-api.dev/onsale/")
    //             .then(aresSale => {
    //                 res.send(aresSale.data)
    //             }).catch(err => {
    //                 console.log(err);
    //             })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    axios.get("https://api.pubsub-api.dev/onsale/")
        .then(aresSale => {
            res.json(aresSale.data);
        }).catch(err => {
            console.log(err);
        });
});

app.get('/subs/:subName', (req, res) => {
    axios.get("https://api.pubsub-api.dev/subs/?name=" + req.params.subName)
        .then(aresName => {
            res.json(aresName.data);
        }).catch(err => {
            console.log(err);
        });
});

// app.get('/testAddPhone', (req, res) => {
//     UserModel.create({phone_number: req.body.phone, pubsubs: req.body.pubsubs}, function(err, inst){
//         if (err){ res.send(400); return;}
//         res.send(200);
//     })
// });

// app.get('/test', (req, res) => {
//     // client.verify.services.create({friendlyName: 'My First Verify Service'})
//     //                   .then(service => console.log(service));
//     // client.verify.services('VA185c31afb471cbac1b70e94acc1d48bc')
//     //          .verifications
//     //          .create({to: '+15027958464', channel: 'sms'})
//     //          .then(verification => console.log(verification.status));
//     // client.verify.services('VA185c31afb471cbac1b70e94acc1d48bc')
//     //   .verificationChecks
//     //   .create({to: '+15027958464', code: '827519'})
//     //   .then(verification_check => console.log(verification_check));

//     var User = mongoose.model('UserModel', UserModelSchema);
//     var phone_num = req.body.phone;
//     User.findOne({'phone_number': phone_num}, '', function(err, user){
//         if (err) {console.log(err);return;}
//         console.log(req.body);
//         user.pubsubs = req.body.pubsubs;
//         user.save();
//     });
// });

// app.get('/createNewService', (req, res) => {
//     client.verify.services.create({
//         friendlyName: "PUBSUB SALE!!!"
//     }).then(service => {
//         console.log(service.sid);
//     })
// });

app.post('/sendOTP', (req, res) => {
    // req.body.phone
    // req.body.pin
    // var tempServiceSID;
    // client.verify.services.create({
    //     friendlyName: "Pub Sub Sale"
    // }).then(service => {
    //     tempServiceSID = service.sid;
    //     console.log(service.sid);
    // })

    

    client.verify.services(twil_ser_sid)
            .verifications
            .create({to: req.body.phone, channel: 'sms'})
            .then(verification => {
                console.log(verification.status);
                res.status(200);
                res.send("Ok");
            }).catch(err => {
                console.log(err);
                res.status(400);
                res.send("Bad request");
            });
});

app.post('/verifyOTP', (req, res) => {
    client.verify.services(twil_ser_sid)
        .verificationChecks
        .create({to: req.body.phone, code: req.body.pin})
        .then(verification_check => {
            if (verification_check.status == "approved"){
                var User = mongoose.model('UserModel', UserModelSchema);
                var phone_num = req.body.phone;
                User.findOne({'phone_number': phone_num}, '', function(err, user){
                    if (user == null) {
                        UserModel.create({name: req.body.name, phone_number: req.body.phone, pubsubs: req.body.pubsubs}, function(err, inst){
                            if (err){ res.status(400); res.send("Bad request"); return;}
                            res.status(200);
                            res.send("Ok");
                        })
                        return;
                    }
                    user.pubsubs = req.body.pubsubs;
                    user.name = req.body.name;
                    user.save();
                    res.status(200);
                    res.send("Ok");
                });
            }
            else{
                res.status(400);
                res.send("Bad request");
            }
        });

    

    
});

app.listen(port, () => {
    console.log("App is open!")
});
