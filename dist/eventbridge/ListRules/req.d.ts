export interface ListRulesRequest {
    /**
     * 规则名称前缀。
     * @example `test`
     */
    "RuleNamePrefix"?: string;
    /**
     * 限定每次返回的最大条数，可以和NextToken搭配使用实现翻页能力。
     * ><notice>每次返回的最大条数不超过100。></notice>
     * @example `50`
     */
    "Limit"?: number;
    /**
     * 当指定Limit时，如果还有多余的返回值则会返回NextToken。
     * @example `1000`
     */
    "NextToken"?: string;
    /**
     * 事件总线的名称。
     * @example `default`
     */
    "EventBusName": string;
}
