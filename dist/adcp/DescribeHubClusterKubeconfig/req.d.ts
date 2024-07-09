export interface DescribeHubClusterKubeconfigRequest {
    /**
     * 集群ID。
     * @example `c102fe5f1ee5d4c87a68121a77d8b****`
     */
    "ClusterId": string;
    /**
     * 是否获取内网连接配置。取值：
     * - `true`：仅获取内网连接凭据。
     * - `false`：仅获取公网连接凭据。
     * 默认值：`false`。
     * @example `false`
     */
    "PrivateIpAddress"?: boolean;
}
