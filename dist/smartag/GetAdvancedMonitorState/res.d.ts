export interface GetAdvancedMonitorStateResponse {
    /**
     * 请求ID。
     * @example `324223F3-93D3-4CE4-B26F-66C0C3809922`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `Success`
     */
    Message: string;
    Data: {
        /**
         * 是否已开启深度监控开关。取值：
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        Enable: boolean;
    }[];
}
