export interface ListAggregateRemediationExecutionsRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-2792626622af0c21****`
     */
    "ConfigRuleId": string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `aVCjqFaSy0Ps6zSMGw09****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。取值范围：10~100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 修正执行状态，取值：
     * - Success：成功。
     * - Failed：失败。
     * @example `Success`
     */
    "ExecutionStatus"?: string;
    /**
     * 账号组内成员账号ID。
     * @example `126672004088****`
     */
    "ResourceAccountId"?: number;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-edd3626622af00b3****`
     */
    "AggregatorId": string;
}
