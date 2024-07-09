export interface UpgradeBackupClientsRequest {
    /**
     * ECS实例ID。ECS实例ID与备份客户端ID数量之和不能超过100个。
     * @example `["c-*********************"]`
     */
    "InstanceIds"?: any;
    /**
     * 备份客户端ID。备份客户端ID与ECS实例ID数量之和不能超过100个。
     * @example `["i-0xi5wj******3j3bh2gj5"]`
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
     * @example `1283948272xxxxx`
     */
    "CrossAccountUserId"?: number;
    /**
     * 用于跨账号备份的原账号RAM中创建的角色名。
     * @example `hbrcrossrole`
     */
    "CrossAccountRoleName"?: string;
}
