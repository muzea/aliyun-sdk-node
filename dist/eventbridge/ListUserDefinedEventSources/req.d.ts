export interface ListUserDefinedEventSourcesRequest {
    /**
     * 事件源名称。
     * @example `testName`
     */
    "NamePrefix"?: string;
    /**
     * 事件总线名称。
     * @example `testBus`
     */
    "EventBusName"?: string;
    /**
     * 限定每次返回的最大条数，可以和NextToken搭配使用实现翻页能力。
     * 注意每次返回的最大条数不超过100。
     * @example `50`
     */
    "Limit"?: number;
    /**
     * 当指定Limit时，如果还有多余的返回值则会返回NextToken。
     * @example `100`
     */
    "NextToken"?: string;
}
