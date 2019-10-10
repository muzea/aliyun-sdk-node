interface CreateInstanceAccountRequest {
    "RegionId"?: string;
    "AccountName": string;
    "Password": string;
    "DbPrivilege": string[];
    "DrdsInstanceId": string;
}
export { CreateInstanceAccountRequest };