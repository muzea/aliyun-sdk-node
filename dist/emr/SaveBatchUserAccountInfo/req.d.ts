interface SaveBatchUserAccountInfoRequest {
    "RegionId": string;
    "AliyunUserIdList": string[];
    "AccountType": string;
    "AccountPassword": string;
    "ResourceType": string;
    "ResourceId": string;
    "GroupName"?: string;
    "AuthType"?: string;
}
export { SaveBatchUserAccountInfoRequest };