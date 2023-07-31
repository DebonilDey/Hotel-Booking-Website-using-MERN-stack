const schema_mongoose = require('mongoose');

const EmployeeSchema = schema_mongoose.Schema(
    {
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    empdob: { type: String },
    emppass: { type: String },
    empchkin: { type: String },
    empchko : { type: String },
    emproom : { type: String },
    empg : { type: String },
    emptp : { type: String }
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('empinfo', EmployeeSchema);
//empinfo is the collection name