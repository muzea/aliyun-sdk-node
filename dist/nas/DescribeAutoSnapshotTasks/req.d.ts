export interface DescribeAutoSnapshotTasksRequest {
    /**
     * 目标文件系统ID。
     * 一次调用最多指定100个文件系统ID，当您需要查询多个文件系统的快照时，多个文件系统ID之间用半角逗号（,）隔开。
     * @example `extreme-233e6****,extreme -23vbp****,extreme -23vas****`
     */
    "FileSystemIds"?: string;
    /**
     * 自动快照策略ID。
     * 最多指定100个自动快照策略ID，当您需要查询多个自动快照策略的任务时，多个自动快照策略ID之间用半角逗号（,）隔开。
     * @example `sp-extreme-233e6****,sp-extreme-233e6****, sp-extreme-233e6****`
     */
    "AutoSnapshotPolicyIds"?: string;
    /**
     * 文件系统类型。
     * 取值：extreme（极速型NAS）
     * @example `extreme`
     */
    "FileSystemType": string;
    /**
     * 自动快照任务列表的页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 每个分页包含的快照任务数量。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageNumber"?: number;
}
