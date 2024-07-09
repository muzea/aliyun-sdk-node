export interface InterruptLogstashTaskResponse {
    /**
     * 错误码 ，正常调用时，不会返回该参数。
     * @example `.`
     */
    Code: string;
    /**
     * 错误信息，正常调用时，不会返回该参数。
     * @example `.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0FA05123-745C-42FD-A69B-AFF48EF9****`
     */
    RequestId: string;
    /**
     * 返回结果：
     * - true：中断任务成功
     * - false：中断任务失败
     * @example `true`
     */
    Result: boolean;
}
