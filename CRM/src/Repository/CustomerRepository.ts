import { AxiosResponse } from "axios";
import { Customer } from "../interface/customer.interface";
import axiosData from "../axios";
import { IRepository } from "./IRepository";



class CustomerRepository implements IRepository {


    private readonly _endpoint = 'Customers'

    async Get(): Promise<AxiosResponse<Customer[]>> {
        return await axiosData.get<Customer[]>(this._endpoint)
    }
    async get(id: number): Promise<AxiosResponse<Customer>> {
        return await axiosData.get<Customer>(`${this._endpoint}/${id}`)
    }
    async create(customer: Customer): Promise<AxiosResponse<Customer>> {
        return await axiosData.post<Customer>(this._endpoint, customer)
    }
    async update(customer: {}): Promise<AxiosResponse<Customer>> {
        return await axiosData.put<Customer>(this._endpoint, customer)
    }
    async delete(id: number): Promise<AxiosResponse<void>> {
        return await axiosData.delete<void>(`${this._endpoint}/${id}`)
    }
}

export default CustomerRepository