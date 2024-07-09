export interface ListStackGroupOperationsResponse {
    /**
     * 资源栈组操作总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询时设置的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 资源栈组操作详情列表。
     */
    StackGroupOperations: {
        /**
         * 操作状态。
         * 取值：
         * - RUNNING：运行中。
         * - SUCCEEDED：成功。
         * - FAILED：失败。
         * - STOPPING：停止中。
         * - STOPPED：已停止。
         * @example `SUCCEEDED`
         */
        Status: string;
        /**
         * 资源栈组ID。
         * @example `fd0ddef9-9540-4b42-a464-94f77835****`
         */
        StackGroupId: string;
        /**
         * 操作结束时间。
         * @example `2020-01-20T09:22:41.000000`
         */
        EndTime: string;
        /**
         * 操作动作。
         * 取值：
         * - CREATE：创建。
         * - UPDATE：更新。
         * - DELETE：删除。
         * - DETECT_DRIFT：偏差检测。
         * @example `CREATE`
         */
        Action: string;
        /**
         * 操作开始时间。
         * @example `2020-01-20T09:22:36.000000`
         */
        CreateTime: string;
        /**
         * 资源栈组名称。
         * @example `MyStackGroup`
         */
        StackGroupName: string;
        /**
         * 操作ID。
         * @example `14A07460-EBE7-47CA-9757-12CC4761****`
         */
        OperationId: string;
        /**
         * 操作描述。
         * @example `Create stack instance in hangzhou`
         */
        OperationDescription: string;
    }[];
}
