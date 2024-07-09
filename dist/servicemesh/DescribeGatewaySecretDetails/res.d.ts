export interface DescribeGatewaySecretDetailsResponse {
    /**
     * 请求ID。
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 网关证书密钥详细信息列表。
     */
    GatewaySecretDetails: {
        /**
         * 证书颁发时间。
         * @example `2022-03-03 07:45`
         */
        IssueTime: string;
        /**
         * 证书过期时间。
         * @example `2023-03-03 07:45`
         */
        ExpiredTime: string;
        /**
         * 网关名称。
         * @example `bookinfo-gateway`
         */
        GatewayName: string;
        /**
         * 证书状态，取值：
         * - `normal`：网关状态正常。
         * - `abnormal`：网关状态异常。
         * @example `normal`
         */
        State: string;
        /**
         * - 当网关状态异常时描述了异常的原因，例如`tls.crt not exist`、`tls.key not exist`、`secret type must be kubernetes.io/tls`。
         * - 当网关正常时，则为空。
         * @example `tls.crt not exist`
         */
        Message: string;
        /**
         * 服务名称标识。
         * @example `demo.com`
         */
        SNI: string;
        /**
         * 密钥名称。
         * @example `demo-secret`
         */
        SecretName: string;
    }[];
}
