interface ModifyAccountPrivilegeRequest {
    "RegionId"?: string;
    "AccountName": string;
    "DbPrivilege": string[];
    "DrdsInstanceId": string;
}
export { ModifyAccountPrivilegeRequest };