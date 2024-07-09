export interface DescribeClusterUserKubeconfigRequest {
    /**
     * 集群ID。
     * @example `c5b5e80b0b64a4bf6939d2d8fbbc5****`
     */
    "ClusterId": string;
    /**
     * 是否获取内网连接配置。取值：
     * - `true`：仅获取内网连接凭据。
     * - `false`：仅获取公网连接凭据。
     * 默认值：`false`。
     * @example `true`
     */
    "PrivateIpAddress"?: boolean;
    /**
     * 临时kubeconfig有效期，单位：分钟。取值范围：15（15分钟）～4320（3天）。
     * >当不设置该参数时，将由系统自动确定一个更长的有效期，具体过期时间通过返回的`expiration`字段的值确定。
     * @example `15`
     */
    "TemporaryDurationMinutes"?: number;
}
