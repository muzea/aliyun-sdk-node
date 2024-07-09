export interface DeleteJobResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `message`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 是否成功。
     * - **true**：删除任务成功。
     * - **false**：删除任务失败。
     * @example `true`
     */
    Success: boolean;
}
