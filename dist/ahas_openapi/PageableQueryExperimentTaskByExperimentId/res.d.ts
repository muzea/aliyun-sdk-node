export interface PageableQueryExperimentTaskByExperimentIdResponse {
    /**
     * 总页数。
     * @example `2`
     */
    Pages: number;
    /**
     * 演练任务信息。
     */
    ExperimentTasks: {
        /**
         * 演练任务结束时间。
         * @example `1611835105000`
         */
        EndTime: number;
        /**
         * 演练任务开始时间。
         * @example `1611835037000`
         */
        StartTime: number;
        /**
         * 任务执行结果。
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 演练任务状态。
         * @example `FINISHED`
         */
        State: string;
        /**
         * 当前执行阶段（运行中的任务属性）。
         * @example `null`
         */
        CurrentPhase: string;
        /**
         * 故障演练ID。
         * @example `1234567890123456789`
         */
        ExperimentId: string;
        /**
         * 任务执行错误信息。
         * @example `null`
         */
        Message: string;
        /**
         * 演练任务ID。
         * @example `1234567890123456789`
         */
        TaskId: string;
        /**
         * 故障演练名称。
         * @example `故障演练`
         */
        ExperimentName: string;
        /**
         * 演练其他信息。
         */
        ExtInfo: {
            /**
             * 演练定时执行信息。
             */
            SchedulerConfig: {
                /**
                 * 指定一次时间执行。
                 * @example `1611835105000`
                 */
                FixedTime: string;
                /**
                 * 定时任务表达式。
                 * @example `0 0 1 * * ? *`
                 */
                CronExpression: string;
            };
        };
        /**
         * 创建人（执行人）。
         */
        Creator: {
            /**
             * RAM用户ID（主账号操作，该字段为空）。
             * @example `2XXXXXXXXXXXXX`
             */
            SubUserId: string;
            /**
             * 阿里云账号ID。
             * @example `1XXXXXXXXXXXXX`
             */
            UserId: string;
        };
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
    }[];
    /**
     * 请求ID。
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 接口异常信息。
     * @example `null`
     */
    Message: string;
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 总数据数。
     * @example `20`
     */
    Total: number;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口请求反馈编码。
     * @example `P_ERROR_****`
     */
    Code: string;
    /**
     * 接口请求成功标识。
     * @example `true`
     */
    Success: boolean;
}
