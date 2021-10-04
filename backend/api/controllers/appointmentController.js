const mongoose = require("mongoose");
const {
  v4: uuidv4
} = require('uuid');

const Appointment = require('../models/appointment');


exports.appointment_get_all = (req, res, next) => {
  Appointment.find().select(
      "userName _id medium email phone grade school year id"
    ).exec()
    .then(docs => {
      console.log("one")
      console.log(docs)
      const response = {
        
        // count: docs.length,
        data: docs.map(doc => {
          return {
            id: doc.id,
            userName: doc.userName,
            _id: doc._id,
            medium: doc.medium,
            email: doc.email,
            phone: doc.phone,
            grade: doc.grade,
            school: doc.school,
            year:doc.year
          };
        })
      };
      console.log(response)
      //   if (docs.length >= 0) {
      res.header('Content-Range', 'Appointments 0-5/20')
      res.status(200).json(response.data);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.appointment_create = (req, res, next) => {
  Appointment.find({
      date: req.body.date,
      time: req.body.time,
      consumer: req.body.consumer,
    }).exec()
    .then(appointment => {
      if (appointment.length > 2) {
        return res.status(404).json({
          message: "Date Fixed"
        });
      } else {
        const appointment = new Appointment({
          _id: new mongoose.Types.ObjectId(),
          userName:  req.body.userName,
          medium:  req.body.medium,
          email:  req.body.email,
          phone:  req.body.phone,
          grade:  req.body.grade,
          school:  req.body.school,
          year: req.body.year,
          id: uuidv4(),
        });
        appointment.save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Created appointement successfully",
            });
          })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.appointment_get_one = (req, res, next) => {
  const id = req.params.appointmentId;
  console.log(req.params.appointmentId)
  Appointment.find({
      id: id,
    }).select("userName _id date time service id consumer email phone")
    .exec()
    .then(doc => {
      if (doc) {
        res.header('Content-Range', 'Employees 0-2/10')
        console.log(doc)
        // res.setHeader('X-Total-Count', docs.length);
        res.status(201).json({
           id:doc[0].id,
           userName: doc[0].userName,
           medium:  doc[0].medium,
           email:  doc[0].email,
           phone:  doc[0].phone,
           grade:  doc[0].grade,
           school:  doc[0].school,
           year: doc[0].year,
            _id: doc[0]._id,
        });
      } else {
        res
          .status(404)
          .json({
            message: "No valid entry found for provided ID"
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.appointment_update = (req, res, next) => {
  const id = req.params.appointmentId;
  Appointment.findByIdAndUpdate(req.body._id,req.body,{ useFindAndModify: false })
    .exec()
    .then(result => {
      res.header('Content-Range', 'Employees 0-2/10')
      console.log(result)
      // res.setHeader('X-Total-Count', docs.length);
      res.status(201).json({
        id:result.id,
        userName: result.userName,
        medium:  result.medium,
        email:  result.email,
        phone: result.phone,
        grade:  result.grade,
        school:  result.school,
        year: result.year,
         _id: result._id,
       
     });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.appointment_delete = (req, res, next) => {
  const id = req.params.appointmentId;
  Appointment.find({
    id: id,
  }).select("userName _id date time service id consumer email phone")
  .exec()
  .then(doc => {
    if (doc) {
      console.log(doc)
      Appointment.findByIdAndRemove({
        _id: doc[0]._id
      })
      .exec()
      .then(result => {
        res.header('Content-Range', 'Employees 0-2/10')
        console.log(result)
        // res.setHeader('X-Total-Count', docs.length);
        res.status(201).json({
          id:result.id,
          userName: result.userName,
          medium:  result.medium,
          email:  result.email,
          phone: result.phone,
          grade:  result.grade,
          school:  result.school,
          year: result.year,
           _id: result._id,
          
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });

    } else {
      res
        .status(404)
        .json({
          message: "No valid entry found for provided ID"
        });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });

}