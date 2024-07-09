export interface ListSnapshotsResponse {
    /**
     * 快照的总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 快照列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 快照信息组成的数组。
     */
    Snapshots: {
        /**
         * 快照状态。可能值：
         * - Progressing：正在创建。
         * - Accomplished：创建成功。
         * - Failed：创建失败。
         * @example `Accomplished`
         */
        Status: string;
        /**
         * 快照创建时间。时间格式以[ISO8601](~~25696~~)为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-03-09T07:12:49Z`
         */
        CreationTime: string;
        /**
         * 源磁盘ID。即使快照的源磁盘已经被释放，仍保留该返回值。
         * @example `d-bp14wq0149cpp2xy****`
         */
        SourceDiskId: string;
        /**
         * 快照名称。
         * @example `test-SnapshotName`
         */
        SnapshotName: string;
        /**
         * 快照创建的进度。
         * @example `100%`
         */
        Progress: string;
        /**
         * 快照备注。
         * @example `test-Remark`
         */
        Remark: string;
        /**
         * 快照ID。
         * @example `s-bp16oazlsold4dks****`
         */
        SnapshotId: string;
        /**
         * 快照源磁盘的磁盘类型。可能值：
         * - System：系统盘。
         * - Data：数据盘。
         * @example `System`
         */
        SourceDiskType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 轻量应用服务器实例ID。
         * 注：系统盘快照该字段有值，数据盘快照该值为空。
         * @example `2ad1ae67295445f598017499dc****`
         */
        InstanceId: string;
        /**
         * 快照的标签列表。
         */
        Tags: {
            /**
             * 快照的标签键。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 快照的标签值。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 最近一次回滚时间。
         * @example `2021-03-09T07:12:49Z`
         */
        RollbackTime: string;
        /**
         * 快照所属的资源组ID。
         * @example `rg-aek2bti7cf7****`
         */
        ResourceGroupId: string;
    }[];
}
