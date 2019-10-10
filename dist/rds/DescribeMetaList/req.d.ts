interface DescribeMetaListRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "RestoreType"?: string;
    "BackupSetID"?: string;
    "RestoreTime"?: string;
    "GetDbName"?: string;
    "Pattern"?: string;
    "PageSize"?: string;
    "PageIndex"?: string;
}
export { DescribeMetaListRequest };