interface CheckAccountNameAvailableRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "AccountName": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { CheckAccountNameAvailableRequest };