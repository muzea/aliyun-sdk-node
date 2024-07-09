export interface DescribeMonitoringAgentConfigResponse {
    /**
     * 开通一键告警的云服务。
     * @example `redis,rds,ecs`
     */
    EnableActiveAlert: string;
    /**
     * 请求ID。
     * @example `E9F4FA2A-54BE-4EF9-9D1D-1A0B1DC86B8D`
     */
    RequestId: string;
    /**
     * 现有ECS主机是否自动安装云监控插件。取值：
     * - true
     * - false
     * @example `true`
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
