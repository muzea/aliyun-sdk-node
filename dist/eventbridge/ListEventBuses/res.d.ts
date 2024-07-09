export interface ListEventBusesResponse {
    /**
     * 错误信息。
     * @example `InvalidArgument`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D1DCF64A-3F2C-5323-ADCB-3F4DF30F****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 查询到的事件总线（EventBus）列表。
         */
        EventBuses: {
            /**
             * 事件总线在阿里云上的统一资源标识（ARN）。
             * @example `acs:eventbridge:cn-hangzhou:12345678909****:eventbus/default`
             */
            EventBusARN: string;
            /**
             * 事件总线的名称。
             * @example `default`
             */
            EventBusName: string;
            /**
             * 描述信息。
             * @example `bus_description`
             */
            Description: string;
            /**
             * 创建时间戳。
             * @example `1607071602000`
             */
            CreateTimestamp: number;
        }[];
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `10`
         */
        NextToken: string;
        /**
         * 总条数。
         * @example `2`
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
