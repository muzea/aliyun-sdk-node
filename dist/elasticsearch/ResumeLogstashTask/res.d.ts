export interface ResumeLogstashTaskResponse {
    /**
     * 错误码 ，正常调用时，不会返回该参数。
     * @example `InstanceNotFound`
     */
    Code: string;
    /**
     * 错误信息，正常调用时，不会返回该参数。
     * @example `The specified cluster does not exist. Check the cluster status and try again.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0FA05123-745C-42FD-A69B-AFF48EF9****`
     */
    RequestId: string;
    /**
     * 返回结果：
     * - true：恢复任务成功
     * - false：恢复任务失败
     * @example `true`
     */
    Result: boolean;
}
