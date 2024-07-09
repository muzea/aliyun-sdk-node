export interface TerminatePhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
