export interface DeleteBinarySecurityPolicyRequest {
    /**
     * 访问源的IP地址。
     * @example `42.120.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 二进制策略名称。
     * @example `policy-auto-bfu7pm`
     */
    "Name"?: string;
}
