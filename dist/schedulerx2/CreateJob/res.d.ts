export interface CreateJobResponse {
    /**
     * 返回码。
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
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 创建任务是否成功。取值如下：
     * - **true**：创建任务成功。
     * - **false**：创建任务失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务详细信息。
     */
    Data: {
        /**
         * 任务ID。
         * @example `92583`
         */
        JobId: number;
    };
}
