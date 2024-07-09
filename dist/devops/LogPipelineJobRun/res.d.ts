export interface LogPipelineJobRunResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 日志
     */
    log: {
        /**
         * 是否还有最新日志
         * @example `true`
         */
        more: boolean;
        /**
         * 日志内容
         * @example `success`
         */
        content: string;
    };
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
}
