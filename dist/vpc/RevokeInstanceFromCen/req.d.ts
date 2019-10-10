interface RevokeInstanceFromCenRequest {
    "RegionId": string;
    "InstanceId": string;
    "InstanceType": string;
    "CenId": string;
    "CenOwnerId": number;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { RevokeInstanceFromCenRequest };