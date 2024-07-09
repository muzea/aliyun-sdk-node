export interface CreateBinarySecurityPolicyRequest {
    /**
     * 访问源的IP地址。
     * @example `59.82.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 策略名称。
     * @example `mv-test`
     */
    "Name"?: string;
    /**
     * 备注信息。
     * @example `remark test`
     */
    "Remark"?: string;
    /**
     * 策略内容。JSON格式，Key取值：
     * - **policyMode**：策略类型，默认requireAttestor。
     * - **requiredAttestors**：需要的证明者。
     * @example `{\"PolicyMode\":\"requireAttestor\",\"RequiredAttestors\":[\"test-xcs-04-12-heyuan\"]}`
     */
    "Policy": string;
    /**
     * 集群信息。
     * @example `[{\"ClusterId\":\"cc12429dbb8f644f690b0623fb52b4737\",\"Namespaces\":[\"default\"]},{\"ClusterId\":\"c9f5b93a8da8f4341b774d79fdbcedb3c\",\"Namespaces\":[\"default\"]}]`
     */
    "Clusters": string;
    /**
     * 策略状态。取值：
     * - **enable**：启用策略
     * - **disable**：关闭策略
     * @example `enable`
     */
    "Status"?: string;
}
