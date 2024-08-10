import { AxiosResponse } from "axios";
import ProductRepository from "../../Repository/ProductRepository";
import { Product } from "../../interface/product.interface";

export class GetProductUseCase {
    private readonly _productRepository: ProductRepository = new ProductRepository()
    async execute(): Promise<AxiosResponse<Product[]>> {
        return await this._productRepository.Get()
    }
}