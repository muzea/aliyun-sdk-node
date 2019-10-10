interface DescribeDdosEventRequest {
    "RegionId"?: string;
    "StartTime": number;
    "EndTime": number;
    "PageSize": number;
    "PageNo": number;
    "InstanceId": string;
    "SourceIp"?: string;
    "Ip"?: string;
    "ResourceRegionId"?: string;
    "ResourceGroupId"?: string;
}
export { DescribeDdosEventRequest };