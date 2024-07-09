export interface ListInstanceStatusResponse {
    /**
     * 实例状态集类型（InstanceStatus）。
     */
    InstanceStatuses: {
        /**
         * 实例状态，可能值：
         * - Pending：准备中
         * - Starting：启动中
         * - Running：运行中
         * - Stopping：停止中
         * - Stopped：停止
         * - Resetting：重置中
         * - Upgrading：升级中
         * - Disabled：不可用
         * @example `Running`
         */
        Status: string;
        /**
         * 指定的轻量应用服务器的实例ID。
         * @example `a9a6474b935d41bcb531250bb5d****`
         */
        InstanceId: string;
    }[];
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `54`
     */
    TotalCount: number;
}
