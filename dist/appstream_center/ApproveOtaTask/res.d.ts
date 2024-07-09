export interface ApproveOtaTaskResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `OtaTask.Running`
     */
    Code: string;
    /**
     * 错误信息。当`Code`为`success`时，不返回该参数。
     * @example `The task is running and cannot be sumitted.`
     */
    Message: string;
}
