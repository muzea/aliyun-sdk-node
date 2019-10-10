interface CreateAccountRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "AccountName": string;
    "AccountPassword": string;
    "OwnerId"?: number;
    "AccountType"?: string;
    "AccountDescription"?: string;
    "DBName"?: string;
    "AccountPrivilege"?: string;
}
export { CreateAccountRequest };