import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    subtotal: {
      type: Number,
      requried: true,
    },
    tax: {
      type: Number,
      requried: true,
    },
    shippingCharges: {
      type: Number,
      requried: true,
    },
    discount: {
      type: Number,
      requried: true,
    },
    total: {
      type: Number,
      requried: true,
    },
    status: {
      type: String,
      enum: ["Processing", "Shipped", "Delivered"],
      default: "Processing",
    },
    orderItems: [
      {
        name: { type: String },
        photo: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", schema);
