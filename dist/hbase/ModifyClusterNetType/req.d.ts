interface ModifyClusterNetTypeRequest {
    "RegionId": string;
    "ClusterId": string;
    "NetType": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "VpcId"?: string;
    "VSwitchId"?: string;
}
export { ModifyClusterNetTypeRequest };