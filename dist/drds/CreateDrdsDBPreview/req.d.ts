interface CreateDrdsDBPreviewRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "DbName"?: string;
    "AccountName"?: string;
    "RdsInstance"?: string[];
    "Type"?: string;
    "DbInstType"?: string;
    "InstDbName"?: string[];
    "DbInstanceIsCreating"?: boolean;
    "OrderId"?: string;
}
export { CreateDrdsDBPreviewRequest };