export interface CreateRoleRequest {
    "ClientToken"?: string;
    "InstanceId": string;
    "RoleName": string;
    "Operator": string;
    "PermissionId": number[];
}
