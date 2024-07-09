export interface ListPipelineJobHistorysResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: boolean;
    /**
     * 错误码
     * @example `”“`
     */
    errorCode: string;
    /**
     * 任务列表
     */
    jobs: {
        /**
         * 任务名称
         * @example `任务名称`
         */
        jobName: string;
        /**
         * 任务标识
         * @example `10_xaxxsxa`
         */
        identifier: string;
        /**
         * 流水线id
         * @example `123`
         */
        pipelineId: number;
        /**
         * 任务第几次执行
         * @example `1`
         */
        executeNumber: number;
        /**
         * 任务id
         * @example `123`
         */
        jobId: number;
        /**
         * 流水线运行实例id
         * @example `123`
         */
        pipelineRunId: number;
        /**
         * 任务运行的代码源信息
         * @example `{}`
         */
        sources: string;
        /**
         * 任务执行状态
         * @example `SUCCESS`
         */
        status: string;
        /**
         * 运行人aliyunPK
         * @example `ssaasssa`
         */
        operatorAccountId: string;
    }[];
    /**
     * 下一页token
     * @example `xsxxs`
     */
    nextToken: string;
    /**
     * 任务总数
     * @example `20`
     */
    totalCount: number;
}
