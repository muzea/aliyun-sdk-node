export interface CreateNetworkRuleResponse {
    /**
     * 网络类型。
     * @example `Private`
     */
    Type: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3bf02f7a-015b-4f93-be0f-cc043fda2dd3`
     */
    RequestId: string;
    /**
     * 描述信息。
     * @example `networkrule description`
     */
    Description: string;
    /**
     * 私网IP地址或者私网网段。
     * @example `["192.10.XX.XX","192.168.XX.XX/24"]`
     */
    SourcePrivateIp: string;
    /**
     * 网络控制规则的名称。
     * @example `networkrule_test`
     */
    Name: string;
    /**
     * 网络控制规则的ARN。
     * @example `acs:kms:cn-hangzhou:119285303511****:network/networkrule_test`
     */
    Arn: string;
}
