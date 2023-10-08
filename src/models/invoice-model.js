import mongoose, { Schema, model } from 'mongoose'
import { InvoiceValidator } from '../utils/joiValidator'

const schema = Schema({
    createdFor: { type: mongoose.Schema.Types.ObjectId, ref: "organization", required: true },
    createdOn: { type: Date, required: true },
    projectsSelected: [{
        id: { type: Number, required: true, unique: true },
        projectDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
        period: { type: Number, required: true },
        totalAmount: { type: Number, required: true }
    }],
    subTotal: { type: Number, required: true },
    gst: { type: Object || Number, required: true },
    total: { type: Number, required: true },
    invoiceCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
})

schema.methods.invoiceValidator = function (obj) {
    const schema = InvoiceValidator
    return schema.validate(obj)
}

const Invoice = model('invoice', schema)

export default Invoice