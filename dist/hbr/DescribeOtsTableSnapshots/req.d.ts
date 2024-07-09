export interface DescribeOtsTableSnapshotsRequest {
    /**
     * 备份开始时间。UNIX时间，单位为毫秒。
     * @example `1611109271630`
     */
    "StartTime"?: number;
    /**
     * 备份结束时间。UNIX时间，单位为毫秒。
     * @example `1652068250881`
     */
    "EndTime"?: number;
    /**
     * 快照列表。
     */
    "SnapshotIds"?: string[];
    /**
     * 备份的表格存储实例列表。
     */
    "OtsInstances"?: {
        /**
         * 备份的表格存储实例名称。
         * @example `instancename`
         */
        InstanceName: string;
        /**
         * 备份的表格存储数据表名称。
         */
        TableNames: string[];
    }[];
    /**
     * 本次查询需要返回的最大数量。
     * @example `100`
     */
    "Limit"?: number;
    /**
     * 获取下一页快照所需的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `CROSS_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 用于跨账号备份的原账号Uid。
     * @example `144015xxxxx98732`
     */
    "CrossAccountUserId"?: number;
    /**
     * 用于跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
}
