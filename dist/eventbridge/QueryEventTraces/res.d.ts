export interface QueryEventTracesResponse {
    /**
     * 错误信息。
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BB934571-1F5A-5E17-91DD-E2BC3E1BFBFF`
     */
    RequestId: string;
    /**
     * 事件轨迹信息。
     */
    Data: {
        /**
         * 事件轨迹类型。取值说明如下：
         * PutEvent：投递事件。
         * FilterEvent：过滤事件。
         * PushEvent：推送事件。
         * @example `PutEvent`
         */
        Action: string;
        /**
         * 事件投递到总线的时间。Action取值为PutEvent时的EventTrace属性。
         * @example `1659495343896`
         */
        ReceivedTime: number;
        /**
         * 事件规则匹配通过时间。Action取值为FilterEvent时的EventTrace属性。
         * @example `1659495343896`
         */
        RuleMatchingTime: string;
        /**
         * 轨迹事件执行时间。
         * @example `1659495343896`
         */
        ActionTime: number;
        /**
         * 事件目标投递状态
         * @example `[200]Ok`
         */
        NotifyStatus: string;
        /**
         * 事件规则的名称
         * @example `ramrolechange-mns`
         */
        RuleName: string;
        /**
         * 事件ID。
         * @example `a5747e4f-2af2-40b6-b262-d0140e995bf7`
         */
        EventId: string;
        /**
         * 事件总线的名称。
         * @example `demo`
         */
        EventBusName: string;
        /**
         * 事件目标的接入点。Action取值为PushEvent时的EventTrace属性。
         * @example `acs:mns:cn-zhangjiakou:123456789098****:queues/testQueue`
         */
        Endpoint: string;
        /**
         * 事件目标投递延迟。Action取值为PushEvent时的EventTrace属性。
         * @example `80`
         */
        NotifyLatency: string;
        /**
         * 事件目标投递时间。Action取值为PushEvent时的EventTrace属性。
         * @example `1659495343896`
         */
        NotifyTime: number;
        /**
         * 事件源名称。
         * @example `cert-api`
         */
        EventSource: string;
    }[];
    /**
     * 接口返回码：
     * 200：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
