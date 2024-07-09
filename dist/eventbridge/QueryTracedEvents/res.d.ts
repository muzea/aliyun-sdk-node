export interface QueryTracedEventsResponse {
    /**
     * 错误信息。
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `d9e4628b-8b34-4f33-82be-5aac50aac0ba`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `1000`
         */
        NextToken: string;
        /**
         * 事件列表。
         */
        Events: {
            /**
             * 事件ID。
             * @example `07E-1OCckaVzNB92BIFFh4xgydOF1wd`
             */
            EventId: string;
            /**
             * 事件总线的名称。
             * @example `test-custom-bus`
             */
            EventBusName: string;
            /**
             * 事件投递到总线的时间。
             * @example `1661773573100`
             */
            EventReceivedTime: number;
            /**
             * 事件源名称。
             * @example `acs.resourcemanager`
             */
            EventSource: string;
            /**
             * 事件类型。
             * @example `eventbridge:Events:HTTPEvent`
             */
            EventType: string;
        }[];
        /**
         * 总条数。
         * @example `6`
         */
        Total: number;
    };
    /**
     * 接口返回码：
     * - Success：表示成功。
     * - 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
