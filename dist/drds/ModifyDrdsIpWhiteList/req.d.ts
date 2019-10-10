interface ModifyDrdsIpWhiteListRequest {
    "RegionId"?: string;
    "DbName": string;
    "IpWhiteList": string;
    "Mode"?: boolean;
    "GroupName"?: string;
    "GroupAttribute"?: string;
    "DrdsInstanceId": string;
}
export { ModifyDrdsIpWhiteListRequest };