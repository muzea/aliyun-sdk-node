export interface UpdateRoleRequest {
    "ClientToken"?: string;
    "InstanceId": string;
    "RoleId": number;
    "RoleName"?: string;
    "Operator": string;
    "PermissionId"?: number[];
}
