export interface DeleteApplicationScalingRuleRequest {
    /**
     * 应用ID。
     * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
     */
    "AppId": string;
    /**
     * 弹性伸缩策略名称。
     * @example `timer-0800-2100`
     */
    "ScalingRuleName": string;
}
