import {Seller} from 'types/seller'

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller
}

export type SalePage = {
    content?: Sale[],
    last: boolean,
    number: number,
    totalElements: number,
    totalPages: number,
    size?: number,
    first: boolean,
    numberOfElements?: number,
    empty?: boolean,
}

export type SaleSum = {
    sellerName: string,
    sum: number
}

export type SaleSucess =  {
    sellerName: string,
    visited: number,
    deals: number

}