export interface GrantRolesRequest {
    "ClientToken"?: string;
    "InstanceId": string;
    "AccountName": string;
    "Operator": string;
    "RoleId": number[];
}
