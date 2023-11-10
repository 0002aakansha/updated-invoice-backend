import mongoose, { Schema, model } from 'mongoose'

const schema = Schema({
    createdFor: { type: mongoose.Schema.Types.ObjectId, ref: 'organization', required: true },
    invoiceNumber: { type: String },
    createdOn: { type: String, required: true },
    dueDate: { type: String, required: true },
    projects: [{
        id: { type: Number },
        projectDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
        period: { type: String },
        workingDays: { type: Number },
        totalWorkingDays: { type: Number },
        hours: { type: Number },
        amount: { type: Number, required: true }
    }],
    subtotal: { type: Number, required: true },
    GST: { type: Object || Number, required: true },
    GrandTotal: { type: Number, required: true },
    status: { type: String, required: true },
    invoiceCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    invoiceType: { type: String, required: true },
    active: { type: Boolean, required: true },
}, {
    timestamps: true
})

// schema.methods.invoiceValidator = function (obj) {
//     const schema = InvoiceValidator
//     return schema.validate(obj)
// }

const Invoice = model('invoice', schema)

export default Invoice