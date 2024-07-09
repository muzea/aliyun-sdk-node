export interface DescribeRecoverableOtsInstancesRequest {
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `CROSS_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 用于跨账号的原账号的阿里云Uid。
     * @example `1440155109798732`
     */
    "CrossAccountUserId"?: number;
    /**
     * 用于跨账号备份的原账号RAM中创建的角色名。
     * @example `hbrcrossrole`
     */
    "CrossAccountRoleName"?: string;
}
