import { AxiosResponse } from "axios";
import { IRepository } from "./IRepository";
import axiosData from "../axios";
import { Product } from "../interface/product.interface";

class ProductRepository implements IRepository
{
    private readonly _endpoint = 'Products'

    async Get(): Promise<AxiosResponse<Product[]>> {
        return await axiosData.get<Product[]>(this._endpoint)
    }
    async get(id: number): Promise<AxiosResponse<Product>> {
        return await axiosData.get<Product>(`${this._endpoint}/${id}`)
    }
    async create(product: {}): Promise<AxiosResponse<Product>> {
        return await axiosData.post<Product>(this._endpoint, product)
    }
    async update(product: {}): Promise<AxiosResponse<Product>> {
        return await axiosData.put<Product>(this._endpoint, product)
    }
    async delete(id: number): Promise<AxiosResponse<void>> {
        return await axiosData.delete<void>(`${this._endpoint}/${id}`)
    }
}

 export default ProductRepository   