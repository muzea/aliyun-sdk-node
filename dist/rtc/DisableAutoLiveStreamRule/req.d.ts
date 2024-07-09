export interface DisableAutoLiveStreamRuleRequest {
    /**
     * 应用ID，可通过控制台创建和查询。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 旁路规则ID。您可以通过控制台查询或调用接口[DescribeAutoLiveStreamRule](~~353198~~)获取旁路规则ID。
     * @example `12`
     */
    "RuleId": number;
}
