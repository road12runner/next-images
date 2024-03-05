import {model, models, Schema} from "mongoose";



const TransactionSchema = new Schema({
  stripeId: {type: String, required: true, unique: true},
  amount: {type: Number, required: true},
  plan: {type: String},
  credits: {type: Number},
  buyers: { type: Schema.Types.ObjectId, ref: "User",},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})


const Transaction  = models?.Transaction || model('Transaction', TransactionSchema);

export default Transaction;
