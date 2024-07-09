export interface DescribeSnapshotsResponse {
    /**
     * 快照详情集合。
     */
    Snapshots: {
        /**
         * 快照ID。
         * @example `s-bp67acfmxazb4p****`
         */
        SnapshotId: string;
        /**
         * 创建时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2020-08-20T14:52:28Z`
         */
        CreationTime: string;
        /**
         * 快照状态。取值：
         * - creating：创建中。
         * - available：可用。
         * - deleting：删除中。
         * - error：错误。
         * @example `available`
         */
        Status: string;
        /**
         * 磁盘容量。单位：MiB。
         * @example `40`
         */
        Size: string;
        /**
         * 源云盘ID。如果快照的源云盘已经被释放，该字段仍旧保留。
         * @example `d-bp67acfmxazb4ph****`
         */
        SourceDiskId: string;
        /**
         * 磁盘属性。取值：
         * - 1：系统盘。
         * - 2：数据盘。
         * @example `1`
         */
        SourceDiskType: string;
        /**
         * 磁盘类型。取值：
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：全闪云盘。
         * - local_hdd：本地HDD盘。
         * - local_ssd：本地盘SSD。
         * @example `cloud_efficiency`
         */
        SourceDiskCategory: string;
        /**
         * 快照显示名称。如果创建时指定了快照显示名称，则返回。
         * @example `testSnapshotName`
         */
        SnapshotName: string;
        /**
         * 描述信息。
         * @example `testDescription`
         */
        Description: string;
        /**
         * ENS的节点ID。
         * @example `cn-beijing-15`
         */
        EnsRegionId: string;
        /**
         * 源快照ID
         * @example `s-bpdfer893jfkdqe****`
         */
        SourceSnapshotId: string;
        /**
         * 源ENS节点ID
         * @example `cn-hangzhou-27`
         */
        SourceEnsRegionId: string;
    }[];
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 快照总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `9635ED2E-3103-1606-84D4-9F8E816B19F9`
     */
    RequestId: string;
}
