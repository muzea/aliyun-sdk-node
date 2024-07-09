export interface GetEventBusResponse {
    /**
     * 错误信息
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 请求id
     * @example `d5bfc188-4452-4ba7-b73a-a9005e522439`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 事件总线在阿里云上的统一资源标识（ARN）。
         * @example `acs:eventbridge:cn-hangzhou:123456789098****:eventbus/MyEventBus`
         */
        EventBusARN: string;
        /**
         * 事件总线名称。
         * @example `MyEventBus`
         */
        EventBusName: string;
        /**
         * 事件总线的描述
         * @example `demo`
         */
        Description: string;
        /**
         * 创建时间戳
         * @example `1641781825000`
         */
        CreateTimestamp: number;
    };
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
