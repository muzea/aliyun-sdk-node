export interface DescribeAutoSnapshotPoliciesRequest {
    /**
     * 自动快照策略ID。
     * @example `sp-extreme-233e6****`
     */
    "AutoSnapshotPolicyId"?: string;
    /**
     * 每个分页包含的自动快照策略的个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 自动快照策略列表的页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 文件系统类型。
     * 取值：extreme（极速型NAS）
     * @example `extreme`
     */
    "FileSystemType"?: string;
}
