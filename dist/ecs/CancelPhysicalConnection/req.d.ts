export interface CancelPhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
