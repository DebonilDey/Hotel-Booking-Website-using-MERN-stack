// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/employee_schema');
const bcrypt = require('bcrypt');
router.post('/register', (req, res) => {
  bcrypt.hash(req.body.emppass, 10)
  .then((encpass) => {
  //Create Object of Employee Model Class
  // And Receive value from request body and Store value within the Object
  const empobj = new EmpModel({
    empname: req.body.empname,
    empemail: req.body.empemail,
    empmobile: req.body.empmobile,
    empdob: req.body.empdob,
    emppass: encpass,
    emproom : req.body.emproom,
    empchkin: req.body.empchkin,
    empchko : req.body.empchko,
    empg : req.body.empg,
    emptp : req.body.emptp

  });//CLOSE EmpModel
  //INSERT/SAVE THE RECORD/DOCUMENT
  empobj.save()
    .then(inserteddocument => {
      res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
    })//CLOSE THEN
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error in Employee Save ' })
    });//CLOSE CATCH
  })
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE POST METHOD
router.delete('/removeemp/:email', (req, res) => {
  EmpModel.findOneAndRemove({ "empemail": req.params.email })
    .then(deleteddocument => {
      if (deleteddocument != null) {
        res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
      }
      else {
        res.status(404).send('INVALID EMP EMAIL ' + req.params.email);
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD
router.post('/logincheck', (req, res) => {
  EmpModel.find({ "empemail": req.body.empemail })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        //console.log(getsearchdocument[0].emppass)
        let enteredpassword = req.body.emppass
        let storedpassword = getsearchdocument[0].emppass
        bcrypt.compare(enteredpassword, storedpassword)
          .then(result => {
            //console.log(result)
            if (result == true)
              res.status(200).send(getsearchdocument);
            else
              res.status(404).send({ message: "PASSWORD NOT MATCHED" });
          })
      }
      else {
        res.status(404).send({ message: "EMAILID NOT FOUND" })
      }
    }) // CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 
router.get('/search/:eemail', (req, res) => {
  EmpModel.find({ "empemail": req.params.eemail })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found with id " + req.params.eemail });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

//SHOULD BE EXPORTED
module.exports = router;