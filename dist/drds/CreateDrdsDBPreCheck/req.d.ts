interface CreateDrdsDBPreCheckRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "DbName"?: string;
    "Encode"?: string;
    "Password"?: string;
    "RdsInstance"?: string[];
    "Type"?: string;
    "DbInstType"?: string;
    "RdsSuperAccount"?: string[];
    "InstDbName"?: string[];
    "DbInstanceIsCreating"?: boolean;
    "AccountName"?: string;
}
export { CreateDrdsDBPreCheckRequest };