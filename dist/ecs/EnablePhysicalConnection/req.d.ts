export interface EnablePhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "ClientToken": string;
    "UserCidr"?: string;
}
