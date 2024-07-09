export interface ListTargetsRequest {
    /**
     * 事件总线的名称。
     * @example `my-event-bus`
     */
    "EventBusName"?: string;
    /**
     * 限定每次返回的最大条数。
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 事件规则名称。
     * @example `tf-testacc-rule`
     */
    "RuleName"?: string;
    /**
     * 当指定Limit时，如果还有多余的返回值则会返回NextToken。
     * @example `0`
     */
    "NextToken"?: string;
    /**
     * ARN资源描述。
     * @example `acs:fc:cn-hangzhou:118609547428****:services/fc-connector.a1/functions/event`
     */
    "Arn"?: string;
}
