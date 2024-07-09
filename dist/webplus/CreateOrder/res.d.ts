export interface CreateOrderResponse {
    OrderDetail: {
        Data: string;
        RequestId: string;
        Success: boolean;
        Code: string;
        Message: string;
    };
    Message: string;
    RequestId: string;
    Code: string;
}
