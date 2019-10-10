interface DoIotRechargeRequest {
    "RegionId"?: string;
    "Iccid": string;
    "OfferIds": string;
    "OutId": string;
    "EffCode": string;
    "OwnerId"?: number;
    "Amount"?: number;
    "OrderNum"?: number;
}
export { DoIotRechargeRequest };