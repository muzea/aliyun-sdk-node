interface CreateVSwitchRequest {
    "RegionId"?: string;
    "CidrBlock": string;
    "VpcId": string;
    "OwnerId"?: number;
    "ZoneId": string;
    "VSwitchName"?: string;
    "Description"?: string;
    "ClientToken"?: string;
}
export { CreateVSwitchRequest };