export interface DescribeArchiveTableListRequest {
    "DBInstanceName": string;
    "RegionId": string;
    "PageSize": number;
    "PageIndex": number;
    "SchemaName"?: string;
    "TableName"?: string;
    "Status"?: string;
}
