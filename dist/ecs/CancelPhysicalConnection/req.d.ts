interface CancelPhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
export { CancelPhysicalConnectionRequest };