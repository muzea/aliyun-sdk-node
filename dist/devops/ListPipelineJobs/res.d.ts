export interface ListPipelineJobsResponse {
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
     * 流水线执行任务
     */
    jobs: {
        /**
         * 任务名称
         * @example `任务名称`
         */
        jobName: string;
        /**
         * 任务的标识
         * @example `ss_saxsxsxs`
         */
        identifier: string;
        /**
         * 最后运行的任务id
         * @example `123`
         */
        lastJobId: number;
        /**
         * 最后运行的任务的参数
         * @example `{}`
         */
        lastJobParams: string;
    }[];
}
