export interface DescribeSnapshotsRequest {
    /**
     * 文件系统类型。
     * 取值：extreme（极速型NAS）
     * @example `extreme`
     */
    "FileSystemType"?: string;
    /**
     * 指定文件系统ID。
     * @example `extreme-22f****`
     */
    "FileSystemId"?: string;
    /**
     * 快照标识编码。
     * 可以由多个快照ID组成，多个ID用半角逗号（,）隔开，最多支持100个ID。
     * @example `s-extreme-67pxwk9aevrkr****,s-extreme-snapsho****,s-extreme-6tmsbas6ljhwh****`
     */
    "SnapshotIds"?: string;
    /**
     * 快照名称。
     * @example `FinanceJoshua`
     */
    "SnapshotName"?: string;
    /**
     * 快照类型。
     * 取值：
     * - auto：自动快照
     * - user：手动创建的快照
     * - all（默认值）：所有快照类型
     * @example `all`
     */
    "SnapshotType"?: string;
    /**
     * 快照状态。
     * 取值：
     * - progressing：正在创建的快照
     * - accomplished：创建成功的快照
     * - failed：创建失败的快照
     * - all（默认）：所有快照状态
     * @example `all`
     */
    "Status"?: string;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 快照列表的页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
}
