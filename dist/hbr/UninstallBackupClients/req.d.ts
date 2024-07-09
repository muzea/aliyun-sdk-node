export interface UninstallBackupClientsRequest {
    /**
     * ECS实例ID。最多20个。
     * @example `["i-0xi5wj5*****v3j3bh2gj5"]`
     */
    "InstanceIds"?: any;
    /**
     * 备份客户端ID。客户端ID与ECS实例ID的数量之和不能超过20个，否则报错。
     * @example `["c-*********************"]`
     */
    "ClientIds"?: any;
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `CROSS_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 用于跨账号备份功能中的原账号ID。
     * @example `129349237xxxxx`
     */
    "CrossAccountUserId"?: number;
    /**
     * 用于跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
}
