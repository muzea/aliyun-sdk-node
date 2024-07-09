export interface EventCenterCheckEnabledOnDefaultBusResponse {
    /**
     * 错误说明。
     * @example `Unknown system error`
     */
    Message: string;
    /**
     * 本次请求的ID。
     * @example `382E6272-8E9C-5681-AC96-XXXXXXXXX`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 是否可用，取值为true或false。
         * @example `true`
         */
        Enabled: boolean;
    };
    /**
     * 状态码。说明 Success表示成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
}
