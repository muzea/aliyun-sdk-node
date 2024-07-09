export interface DescribeMonitoringConfigResponse {
    /**
     * 请求ID。
     * @example `F35654DB-0C9D-4FB3-903F-479BA7663061`
     */
    RequestId: string;
    /**
     * 现有ECS主机是否自动安装云监控插件。取值：
     * - true
     * - false
     * @example `false`
     */
    AutoInstall: boolean;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 新购ECS主机是否自动安装云监控插件。取值：
     * - true
     * - false
     * @example `true`
     */
    EnableInstallAgentNewECS: boolean;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
}
