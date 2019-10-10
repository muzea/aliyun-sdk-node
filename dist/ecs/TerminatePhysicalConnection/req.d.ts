interface TerminatePhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
export { TerminatePhysicalConnectionRequest };