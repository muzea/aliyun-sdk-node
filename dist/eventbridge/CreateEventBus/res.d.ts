export interface CreateEventBusResponse {
    /**
     * 错误信息
     * @example `The event bus [xxxx] not existed!`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A995F07C-E503-5881-9962-9CECA8566876`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 事件总线在阿里云上的统一资源标识（ARN）。
         * @example `acs:eventbridge:cn-hangzhou:123456789098****:eventbus/MyEventBus	`
         */
        EventBusARN: string;
    };
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 是否调用成功：true：调用成功。
     * @example `true`
     */
    Success: boolean;
}
