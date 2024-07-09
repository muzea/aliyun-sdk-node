export interface DisableJobResponse {
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息，仅出错时返回错误信息。
     * @example `jobid: 92583 not match groupId: testSchedulerx.defaultGroup`
     */
    Message: string;
    /**
     * 请求唯一ID
     * @example `C8E5FB4A-6D8D-424D-9AAA-4FE06BB74FF9`
     */
    RequestId: string;
    /**
     * 禁用任务是否成功。取值如下：
     * - **true**：禁用任务成功。
     * - **false**：禁用任务失败。
     * @example `true`
     */
    Success: boolean;
}
