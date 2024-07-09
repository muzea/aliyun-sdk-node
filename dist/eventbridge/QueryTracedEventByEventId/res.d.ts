export interface QueryTracedEventByEventIdResponse {
    /**
     * 错误信息。
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A5D7B9F4-BF96-51A9-90B1-928955FABB5B`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `1000`
         */
        NextToken: string;
        /**
         * 事件信息
         */
        Events: {
            /**
             * 事件ID。
             * @example `37C-1P6Yn6EM7TcH37Vod8w7rbSeimJ`
             */
            EventId: string;
            /**
             * 事件总线的名称。
             * @example `default`
             */
            EventBusName: string;
            /**
             * 事件投递到总线的时间。
             * @example `1661773573100`
             */
            EventReceivedTime: number;
            /**
             * 事件源的名称。
             * @example `cert-api`
             */
            EventSource: string;
            /**
             * 事件类型。
             * @example `eventbridge:Events:HTTPEvent`
             */
            EventType: string;
        }[];
        /**
         * 总条数
         * @example `18`
         */
        Total: number;
    }[];
    /**
     * 接口返回码：
     * Success：表示成功。
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
