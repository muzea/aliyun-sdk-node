interface DescribeTableListByTypeRequest {
    "RegionId"?: string;
    "DbName": string;
    "TableType": string;
    "Query"?: string;
    "DrdsInstanceId": string;
    "PageSize"?: number;
    "CurrentPage"?: number;
}
export { DescribeTableListByTypeRequest };