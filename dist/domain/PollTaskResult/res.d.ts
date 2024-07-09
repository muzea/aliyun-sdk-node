export interface PollTaskResultResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 唯一请求识别码。
     * @example `E879DC07-38EE-4408-9F33-73B30CD965CD`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `1`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `10`
     */
    TotalPageNum: number;
    Data: {
        /**
         * 任务详情列表。
         */
        TaskDetail: {
            /**
             * 最近一次任务详情执行时间。
             * @example `2018-03-26 15:22:18`
             */
            UpdateTime: string;
            /**
             * 任务详情编号。
             * @example `15fee9d10d514bada66bd08c5723c583`
             */
            TaskDetailNo: string;
            /**
             * 任务创建时间。
             * @example `2018-03-26 15:08:20`
             */
            CreateTime: string;
            /**
             * 域名实例编号。
             * @example `S201817141000000`
             */
            InstanceId: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 任务类型。
             * @example `CHG_DNS`
             */
            TaskType: string;
            /**
             * 任务编号。
             * @example `b95bc334-f7d8-4f39-8a62-4c4302a243d8`
             */
            TaskNo: string;
            /**
             * 任务结果。
             * @example `test`
             */
            TaskResult: string;
            /**
             * 任务状态码。可能值：
             * - **0**：等待执行。
             * - **1**：执行中。
             * - **2**：执行成功。
             * - **3**：执行失败。
             * @example `2`
             */
            TaskStatusCode: number;
            /**
             * 任务状态。可能值：
             * - **WAITING_EXECUTE**：等待执行。
             * - **EXECUTING**：执行中。
             * - **EXECUTE_SUCCESS**：执行成功。
             * - **EXECUTE_FAILURE**：执行失败。
             * @example `EXECUTE_SUCCESS`
             */
            TaskStatus: string;
            /**
             * 任务类型描述。如果切换了Lang参数，该字段会切换语言。
             * @example `修改DNS`
             */
            TaskTypeDescription: string;
            /**
             * 任务详情重试次数。
             * @example `0`
             */
            TryCount: number;
            /**
             * 任务执行失败消息。
             * @example `The operation is successful.`
             */
            ErrorMsg: string;
        }[];
    };
    /**
     * 总条数。
     * @example `10`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    NextPage: boolean;
}
