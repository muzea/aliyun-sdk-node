export interface InstallBackupClientsRequest {
    /**
     * ECS实例ID。最多20个。
     * @example `["i-0xi5wj5*****v3j3bh2gj5"]`
     */
    "InstanceIds": any;
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `CROSS_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 用于跨账号备份功能中的原账号ID。
     * @example `16392782xxxxxx`
     */
    "CrossAccountUserId"?: number;
    /**
     * 用于跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
}
