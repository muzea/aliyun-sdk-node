export interface CreateVSwitchRequest {
    "ZoneId": string;
    "CidrBlock": string;
    "VpcId": string;
    "RegionId"?: string;
    "VSwitchName"?: string;
    "Description"?: string;
    "ClientToken"?: string;
}
