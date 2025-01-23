import mongoose from "mongoose"

const CustomerInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.CustomerInquiry || mongoose.model("CustomerInquiry", CustomerInquirySchema)

