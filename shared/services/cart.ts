import { axiosInstance } from "./instance";
import { CartDTO } from "./dto/cart-dto";


export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>("/cart");
  return data;
};


export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
    const { data } = await axiosInstance.patch<CartDTO>('/cart/' + itemId, {quantity});
    return data;
};


export const removeCartItem = async (itemId: number): Promise<CartDTO> => {
    const { data } = await axiosInstance.delete<CartDTO>('/cart/' + itemId);
    return data;
};

