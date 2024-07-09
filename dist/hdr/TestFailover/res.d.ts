export interface TestFailoverResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * 请求唯一ID，具有唯一性。
     * @example `6758891B-CF5A-5CA6-BF59-633573B91140`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-000h3k00ckeknbukn5a5`
     */
    TaskId: string;
    /**
     * 是否调用成功。
     * @example `True`
     */
    Success: boolean;
}
