export interface AddSecurityGroupRuleRequest {
    /**
     * 安全组ID
     * @example `sg-wz929kxhcdpw9z8idqd8`
     */
    "SecurityGroupId": string;
    /**
     * 端口范围
     * @example `1/65535`
     */
    "PortRange": string;
    /**
     * 网关ID
     * @example `gw-c9bc5afd61014165bd58f621b491****`
     */
    "GatewayUniqueId": string;
    /**
     * 描述。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
