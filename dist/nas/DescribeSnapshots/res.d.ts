export interface DescribeSnapshotsResponse {
    /**
     * 快照总个数。
     * @example `36`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 查询结果每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 快照列表的页码。
     * @example `1`
     */
    PageNumber: number;
    Snapshots: {
        /**
         * 快照详情集合。
         */
        Snapshot: {
            /**
             * 快照状态。
             * 包括：
             * - progressing：正在创建的快照
             * - accomplished：创建成功的快照
             * - failed：创建失败的快照
             * @example `accomplished`
             */
            Status: string;
            /**
             * 创建快照的进度。以百分比表示。
             * @example `100`
             */
            Progress: string;
            /**
             * 创建时间。
             * 按照[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)标准表示，并使用UTC时间。格式为：`yyyy-MM-ddThh:mmZ`。
             * @example `2014-07-24T13:00:52Z`
             */
            CreateTime: string;
            /**
             * 源文件系统ID。
             * 如果快照的源文件系统已经被删除，该字段仍旧保留。
             * @example `extreme-012****`
             */
            SourceFileSystemId: string;
            /**
             * 自动快照保留天数。
             * 单位：天。
             * 包括：
             * - -1：永久保存，当快照数量达到额度上限后被自动删除。
             * - 1~65536：指定保存天数，保留时间到期后快照会被自动释放。
             * @example `30`
             */
            RetentionDays: number;
            /**
             * 正在创建的快照任务剩余完成时间。
             * 单位：秒。
             * @example `38`
             */
            RemainTime: number;
            /**
             * 源文件系统容量。
             * 单位：GiB。
             * @example `2000`
             */
            SourceFileSystemSize: number;
            /**
             * 源文件系统版本号。
             * @example `1`
             */
            SourceFileSystemVersion: string;
            /**
             * 快照名称。
             * 创建快照时指定了快照名称，则返回快照名称。创建快照时未指定快照名称，则不返回此参数。
             * @example `FinanceJoshua`
             */
            SnapshotName: string;
            /**
             * 加密类型。
             * 包括：
             * - 0：不加密
             * - 1：加密
             * @example `1`
             */
            EncryptType: number;
            /**
             *
             * @example `FinanceDept`
             */
            Description: string;
            /**
             * 快照ID。
             * @example `s-extreme-snapsho****`
             */
            SnapshotId: string;
            /**
             * 文件系统类型。
             * @example `extreme`
             */
            FileSystemType: string;
            /**
             * 快照创建类型。
             * 枚举值：
             * - auto: 自动创建快照
             * - user: 手动创建快照
             * @example `user`
             */
            SnapshotType: string;
        }[];
    };
}
