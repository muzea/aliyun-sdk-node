export interface StartPipelineRunResponse {
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
     * 流水线运行实例id
     * @example `1`
     */
    pipelineRunId: number;
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
