export interface EnableJobResponse {
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `jobid: 92583 not match groupId: testSchedulerx.defaultGroup`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `71BCC0E3-64B2-4B63-A870-AFB64EBC***`
     */
    RequestId: string;
    /**
     * 调用任务是否成功。取值如下：
     * - **true**：调用任务成功。
     * - **false**：调用任务失败。
     * @example `true`
     */
    Success: boolean;
}
