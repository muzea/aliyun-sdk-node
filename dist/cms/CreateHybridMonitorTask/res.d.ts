export interface CreateHybridMonitorTaskResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `yamlConfigFail`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `28CEA2E0-3E90-51B2-A7E8-B1ED75534E49`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 监控任务ID。
     * @example `36****`
     */
    TaskId: number;
}
