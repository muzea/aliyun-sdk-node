interface CreateOrderRequest {
    "RegionId"?: string;
    "OrderType": string;
    "Commodity": string;
    "PaymentType": string;
    "ClientToken": string;
    "OwnerId"?: string;
    "OrderSouce"?: string;
}
export { CreateOrderRequest };