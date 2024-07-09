export interface QueryTracedEventsRequest {
    /**
     * 事件总线的名称。
     * @example `MyEventBus`
     */
    "EventBusName": string;
    /**
     * 检索到事件的开始时间。单位为：ms
     * @example `1661773509000`
     */
    "StartTime": number;
    /**
     * 检索到事件的结束时间。单位为：ms
     * @example `1661773509000`
     */
    "EndTime": number;
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
     * 事件源名称。
     * @example `mse`
     */
    "EventSource"?: string;
    /**
     * 事件类型。
     * @example `eventbridge:Events:HTTPEvent`
     */
    "EventType"?: string;
    /**
     * 匹配的规则名称。
     * @example `test-mnsrule`
     */
    "MatchedRule"?: string;
}
