export interface DescribeAutoSnapshotTasksResponse {
    /**
     * 自动快照任务的总个数。
     * @example `9`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 自动快照任务列表的页码。
     * @example `1`
     */
    PageNumber: number;
    AutoSnapshotTasks: {
        /**
         * 自动快照任务信息集合。
         */
        AutoSnapshotTask: {
            /**
             * 文件系统ID。
             * @example `extreme-233e6****`
             */
            SourceFileSystemId: string;
            /**
             * 自动快照策略的ID。
             * @example `sp-extreme-233e6****`
             */
            AutoSnapshotPolicyId: string;
        }[];
    };
}
