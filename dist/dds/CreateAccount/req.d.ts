interface CreateAccountRequest {
    "RegionId"?: string;
    "AccountName": string;
    "AccountPassword": string;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "AccountDescription"?: string;
}
export { CreateAccountRequest };