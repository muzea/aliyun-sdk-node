export interface ListSnapshotResponse {
    /**
     * 查询结果总条数。
     * @example `32`
     */
    TotalCount: number;
    /**
     * 输入时设置的每页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 快照集合。
     */
    Snapshots: {
        /**
         * 快照状态。可能值：
         * - progressing
         * - accomplished
         * - failed
         * @example `accomplished`
         */
        Status: string;
        /**
         * 快照创建时间。
         * @example `1609330367000`
         */
        CreationTime: string;
        /**
         * 快照进度。
         * @example `100%`
         */
        Progress: string;
        /**
         * 源数据库文件系统容量。
         * @example `20`
         */
        SourceFsSize: number;
        /**
         * 快照保留天数。
         * @example `30`
         */
        RetentionDays: number;
        /**
         * 正在创建的快照剩余完成时间，单位为秒。
         * @example `38`
         */
        RemainTime: number;
        /**
         * 快照最后修改时间。
         * @example `1609330367000`
         */
        LastModifiedTime: string;
        /**
         * 快照创建类型。可能值：
         * - auto：自动创建快照。
         * - user：手动创建快照。
         * - all（默认）：所有的快照创建类型。
         * @example `user`
         */
        SnapshotType: string;
        /**
         * 快照显示名称。如果创建时指定了快照显示名称，则返回。
         * @example `testSnapshotName`
         */
        SnapshotName: string;
        /**
         * 快照描述。
         * @example `testDescription`
         */
        Description: string;
        /**
         * 源数据库文件系统ID。
         * @example `dbfs-bp67acfmxazb4p****`
         */
        SourceFsId: string;
        /**
         * 快照ID。
         * @example `s-bp67acfmxazb4p****`
         */
        SnapshotId: string;
        /**
         * 快照类型。可能值：
         * - standard：标准版。
         * - enterprise：企业版。
         * @example `standard`
         */
        Category: string;
        /**
         * 源数据库文件系统条带宽度。
         * @example `1`
         */
        SourceFsStripeWidth: number;
    }[];
}
