interface EnablePhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "ClientToken": string;
    "OwnerId"?: number;
    "UserCidr"?: string;
}
export { EnablePhysicalConnectionRequest };