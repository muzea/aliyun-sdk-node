export interface GetTaskStatusResponse {
    /**
     * 返回编码，默认为0，表示执行正常。
     * @example `0`
     */
    Code: number;
    /**
     * 请求的返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90ABA848-AD74-1F6E-84BC-4182A7F1****`
     */
    RequestId: string;
    /**
     * 详情。
     * @example `""`
     */
    Details: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务状态，可能值：
     * - INIT：初始化。
     * - PROCESSING：处理中。
     * - SUCC：成功。
     * - FAIL：失败。
     * - DELETED：删除。
     * - OFFLINE：下线。
     * - FINISHED：完成。
     * @example `SUCC`
     */
    TaskStatus: string;
    /**
     * 错误码。
     * @example `""`
     */
    ErrorCode: string;
}
