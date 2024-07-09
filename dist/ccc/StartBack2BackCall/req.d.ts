export interface StartBack2BackCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 主叫号码。
     * @example `1391814****`
     */
    "Caller": string;
    /**
     * 被叫号码。
     * @example `1372168****`
     */
    "Callee": string;
    /**
     * 双呼超时时间，呼叫在经过该参数指定的时间仍然未接通的情况下，则主动挂断，非必填，默认30，单位秒。
     * @example `30`
     */
    "TimeoutSeconds"?: number;
    /**
     * 中间号码，需要是实例下可用的外呼号码，双呼时会使用该号码先后呼叫主叫和被叫。
     * @example `0102157****`
     */
    "Broker": string;
    /**
     * 附加中间号码，如果该参数存在，则呼叫主叫时使用中间号码，呼叫被叫时使用该参数指定的号码，非必填， 默认空。
     * @example `0102156****`
     */
    "AdditionalBroker"?: string;
    /**
     * 随路数据，不能超过128字节，主要用于扩展需求，普通客户无需关心。
     * @example `无`
     */
    "Tags"?: string;
}
