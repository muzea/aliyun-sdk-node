export interface UninstallMonitoringAgentResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `Successfully`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `466902B9-2842-40B0-B796-00FE772B6EF3`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
