export interface ListInvocationResultsResponse {
    /**
     * 每页显示的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    InvocationResults: {
        /**
         * 执行结果信息。
         */
        InvocationResult: {
            /**
             * 执行命令并获取结果的过程是否成功。
             * @example `true`
             */
            Success: boolean;
            /**
             * 输出结果。
             * @example `hello world`
             */
            Message: string;
            /**
             * 完成时间。
             * @example `2021-09-06T09:14:56Z`
             */
            FinishedTime: string;
            /**
             * 命令ID。
             * @example `c-hz01v8x80o3****`
             */
            CommandId: string;
            /**
             * 执行命令的节点实例ID。
             * @example `i-uf65bh2113hlqvyr****`
             */
            InstanceId: string;
            /**
             * 查询的命令的运行状态。可能值：
             * - Finished：已结束
             * - Running：运行中
             * - Failed：运行失败
             * - Stopped：已停止
             * @example `Finished`
             */
            InvokeRecordStatus: string;
            /**
             * Shell命令退出码。
             * @example `0`
             */
            ExitCode: number;
        }[];
    };
}
