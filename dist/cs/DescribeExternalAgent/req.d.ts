export interface DescribeExternalAgentRequest {
    /**
     * 集群ID。
     * @example `c106f377e16f34eb1808d6b9362c9****`
     */
    "ClusterId": string;
    /**
     * 是否获取内网访问凭据。
     * - `true`：仅获取内网连接凭据。
     * - `false`：仅获取公网连接凭据。
     * 默认值：`false`。
     * @example `true`
     */
    "PrivateIpAddress"?: string;
    /**
     * Agent权限模式。
     * admin：管理员模式，拥有所有权限。
     * restricted：受限模式，仅拥有部分权限。
     * 默认值：admin。
     * @example `admin`
     */
    "AgentMode"?: string;
}
