export interface DescribeApplicationScalingRuleRequest {
    /**
     * 应用ID。
     * @example `a0d2e04c-159d-40a8-b240-d2f2c263****`
     */
    "AppId": string;
    /**
     * 弹性伸缩策略名称。
     * @example `test`
     */
    "ScalingRuleName": string;
}
