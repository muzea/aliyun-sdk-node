export interface ListBenchmarkTaskResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    Tasks: {
        /**
         * 压测任务名称。
         * @example `benchmark-larec-test-1076`
         */
        TaskName: string;
        /**
         * 压测任务ID。
         * @example `eas-b-gv4y86uvgt****i`
         */
        TaskId: string;
        /**
         * 待压测的服务名称。
         * @example `test_quota`
         */
        ServiceName: string;
        /**
         * 压测任务所在区域。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 可用的压测实例个数。
         * @example `2`
         */
        AvailableAgent: number;
        /**
         * 压测任务的状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 服务的摘要信息。
         * @example `Benchmark task [benchmark-larec-test-1076] is Running`
         */
        Message: string;
        /**
         * 压测任务的创建时间。
         * @example `2020-12-04T02:43:15Z`
         */
        CreateTime: string;
        /**
         * 压测任务的更新时间。
         * @example `2020-06-24T03:11:30Z`
         */
        UpdateTime: string;
    }[];
    /**
     * 查询到的任务总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 返回查询的压测任务列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的压测任务数量。
     * @example `20`
     */
    PageSize: number;
}
