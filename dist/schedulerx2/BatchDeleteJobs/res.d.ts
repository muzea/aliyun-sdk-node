export interface BatchDeleteJobsResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `message`
     */
    Message: string;
    /**
     * 请求唯一ID
     * @example `71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7`
     */
    RequestId: string;
    /**
     * 批量删除任务是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
}
