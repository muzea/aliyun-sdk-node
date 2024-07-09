export interface DescribeNetworkRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3bf02f7a-015b-4f93-be0f-cc043fda2d33`
     */
    RequestId: string;
    /**
     * 网络控制规则的ARN。
     * @example `acs:kms:cn-hangzhou:119285303511****:network/networkrule_test`
     */
    Arn: string;
    /**
     * 网络类型。取值仅支持Private，即仅支持私网IP。
     * @example `Private`
     */
    Type: string;
    /**
     * 描述信息。
     * @example `Create by kst-hzz62ee817bvyyr5****`
     */
    Description: string;
    /**
     * 私网IP地址或者私网网段。
     * @example `["192.10.XX.XX","192.168.XX.XX/24"]`
     */
    SourcePrivateIp: string;
}
