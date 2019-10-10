interface DescribeRecordsRequest {
    "RegionId"?: string;
    "PageNum": number;
    "PageSize": number;
    "OwnerId"?: number;
    "AppId": string;
    "RecordState"?: string;
}
export { DescribeRecordsRequest };