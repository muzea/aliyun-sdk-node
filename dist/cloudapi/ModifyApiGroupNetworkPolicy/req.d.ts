export interface ModifyApiGroupNetworkPolicyRequest {
    /**
     * 指定要修改的分组id
     * @example `b0162c75d7d34ff48506f1aff878b05e`
     */
    "GroupId": string;
    /**
     * https安全策略
     * @example `HTTPS1_1_TLS1_0`
     */
    "HttpsPolicy"?: string;
    /**
     * 是否支持公网访问，**关闭后将无法通过公网访问API网关，请谨慎操作**
     * - **True**：支持公网访问
     * - **False**：关闭公网访问
     * @example `true`
     */
    "InternetEnable"?: boolean;
    /**
     * 是否开启ipv6
     * - **True**：开启
     * - **False**：关闭
     * @example `true`
     */
    "InternetIPV6Enable"?: boolean;
    /**
     * 是否开启内网VPC域名
     * - **True**：开通内网VPC域名
     * - **False**：关闭内网VPC域名
     * @example `false`
     */
    "VpcIntranetEnable"?: boolean;
    /**
     * 是否开启API网关自调用域名
     * @example `false`
     */
    "VpcSlbIntranetEnable"?: boolean;
    /**
     * 是否支持分组的公网二级域名调用
     * - **True**：支持分组公网二级域名调用
     * - **False**：关闭分组公网二级域名调用，仅支持自定义域名访问
     * @example `true`
     */
    "InnerDomainEnable"?: boolean;
}
