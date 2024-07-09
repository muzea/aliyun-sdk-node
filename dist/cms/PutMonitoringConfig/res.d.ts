export interface PutMonitoringConfigResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `Specified parameter EnableInstallAgentNewECS is not valid.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `109C8095-6FAD-4DBB-B013-6ED18CE4C0B1`
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
