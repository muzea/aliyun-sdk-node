interface UnicomOrderConfirmRequest {
    "RegionId": string;
    "TradeId": string;
    "TmsCode": string;
    "TmsOrderCode": string;
    "OrderPostFee": number;
    "OwnerUserId": string;
    "OrderItem": string[];
    "OwnerId"?: number;
}
export { UnicomOrderConfirmRequest };