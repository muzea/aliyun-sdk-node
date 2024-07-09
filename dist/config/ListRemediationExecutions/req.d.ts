export interface ListRemediationExecutionsRequest {
    /**
     * 规则ID。
     * @example `cr-5392626622af0000****`
     */
    "ConfigRuleId": string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `aVCjqNaSy0Ps7zSMGu25****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。取值范围：10~100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 修正执行状态，取值：
     * - Success：成功
     * - Failed：失败
     * @example `Success`
     */
    "ExecutionStatus"?: string;
}
