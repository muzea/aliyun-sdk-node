export interface DescribeSubaccountK8sClusterUserConfigRequest {
    /**
     * 集群ID。
     * @example `c5b5e80b0b64a4bf6939d2d8f****`
     */
    "ClusterId": string;
    /**
     * 阿里云账号内指定的RAM用户或RAM角色ID。
     * @example `26562443851650****`
     */
    "Uid": string;
    /**
     * 是否获取内网连接配置。取值：
     * - `true`：仅获取内网连接的KubeConfig凭证。
     * - `false`：仅获取公网连接的KubeConfig凭证。
     * 默认值：`false`。
     * @example `true`
     */
    "PrivateIpAddress"?: boolean;
    /**
     * 临时KubeConfig有效期，单位：分钟。
     * 取值范围：15分钟～4320分钟（3天）。
     * > 当不设置该参数时，将由系统自动确定一个更长的有效期，具体过期时间通过返回的expiration字段的值确定。
     * @example `15`
     */
    "TemporaryDurationMinutes"?: number;
}
