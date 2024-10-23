const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
  },
  stores: [
    {
      storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
      storeName: { type: String, required: true },
      role: { type: String, enum: ['owner', 'admin', 'manager', 'user'], required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

UserSchema.index({ googleId: 1 });

module.exports = mongoose.model('User', UserSchema);
