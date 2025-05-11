import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
  name: string;
  email: string;
  photo?: string;
  gender?: string;
  _id?: string;
  dob?: Date;
}

export interface NewProductRequestBody {
  name: string;
  category: string;
  price: Number;
  stock: Number;
}

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any | Response<any, Record<string, any>>>;

export type SearchRequestQuery = {
  search?: string;
  price?: string;
  category?: string;
  sort?: string;
  page?: string;
};

export interface BaseQuery {
  name?: string | { $regex: string | RegExp; options?: string };
  price?: { $lte: number };
  category?: string;
}

export type InvalidateCacheProps = {
  product?: boolean;
  order?: boolean;
  admin?: boolean;
  userId?: string;
  orderId?: string;
  productId?: string | string[];
};

export type OrderItemType = {
  name: String;
  photo: String;
  price: number;
  quantity: number;
  productId: String;
};

export type ShippingInfoType = {
  address: String;
  city: String;
  state: String;
  country: String;
  pinCode: number;
};

export interface newOrderRequestBody {
  shippingInfo: ShippingInfoType;
  user: string;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  orderItems: OrderItemType[];
}
