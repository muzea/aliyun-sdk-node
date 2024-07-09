export interface ListPipelineRunsResponse {
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
     * 错误码
     * @example `”“`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 总数
     * @example `50`
     */
    totalCount: number;
    /**
     * 下一个分页token，为空时，表示没有下一页
     * @example `xzxsasasaas`
     */
    nextToken: string;
    /**
     * 流水线运行实例
     */
    pipelineRuns: {
        /**
         * 流水线id
         * @example `1234`
         */
        pipelineId: number;
        /**
         * 开始时间
         * @example `1586863220000`
         */
        startTime: number;
        /**
         * 运行人阿里云账号id
         * @example `1222222222`
         */
        creatorAccountId: string;
        /**
         * 结束时间
         * @example `1586863220000`
         */
        endTime: number;
        /**
         * 流水线实例id
         * @example `11`
         */
        pipelineRunId: number;
        /**
         * - 触发模式
         *
         *   1人工触发
         *
         *   2定时触发
         *   3代码提交触发
         *
         *   5流水线触发
         *   6WEBHOOK触发
         * @example `1`
         */
        triggerMode: number;
        /**
         * 运行状态
         * @example `状态 FAIL 运行失败 SUCCESS 运行成功 RUNNING 运行中`
         */
        status: string;
    }[];
}
