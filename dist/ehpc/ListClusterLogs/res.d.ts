export interface ListClusterLogsResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `BBC2F93D-003A-49C4-850C-B826EECF6667`
     */
    RequestId: string;
    /**
     * 列表条目总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    ClusterId: string;
    Logs: {
        /**
         * 操作日志简要信息数组。
         */
        LogInfo: {
            /**
             * 操作类型。可能值：
             * - CreateCluster
             * - StartCluster
             * - StopCluster
             * - DeleteCluster
             * - AddNodes
             * - StartNodes
             * - ResetNodes
             * - StopNodes
             * - DeleteNodes
             * @example `CreateCluster`
             */
            Operation: string;
            /**
             * 日志内容。
             * @example `Begin to create cluster`
             */
            Message: string;
            /**
             * 日志创建时间。
             * @example `2019-09-18T13:24:13.000`
             */
            CreateTime: string;
            /**
             * 日志级别。可能值：
             * - warn
             * - error
             * - infor
             * @example `info`
             */
            Level: string;
        }[];
    };
}
