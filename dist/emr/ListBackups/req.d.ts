interface ListBackupsRequest {
    "RegionId": string;
    "Limit"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    "CurrentSize"?: number;
    "PageCount"?: number;
    "OrderField"?: string;
    "OrderMode"?: string;
    "Id"?: number;
    "BizId"?: string;
    "MetadataType"?: string;
    "ServiceName"?: string;
    "BackupPlanId"?: string;
    "ClusterId"?: string;
    "Status"?: string;
    "BackupId"?: string[];
}
export { ListBackupsRequest };