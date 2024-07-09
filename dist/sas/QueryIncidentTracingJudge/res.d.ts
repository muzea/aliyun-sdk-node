export interface QueryIncidentTracingJudgeResponse {
    /**
     * 本次调用请求的结果数据。
     */
    TracingJudge: any;
    /**
     * 本次调用请求的状态。取值：
     * - **true**：接口调用成功
     * - **false**：接口调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `73563FEF-BBCB-151C-88AA-DVA33214****`
     */
    RequestId: string;
}
