import { AxiosResponse } from "axios";


export interface IRepository {
    Get(): Promise<AxiosResponse<{}>>
    get(id: number): Promise<AxiosResponse<{}>>
    create(params: {}): Promise<AxiosResponse<{}>>
    update(params: {}, id: number): Promise<AxiosResponse<{}>>
    delete(id: number): Promise<AxiosResponse<void>>
}