export interface SendMessageResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 短信结果列表，列表中手机号的顺序与输入请求手机号顺序一一对应。
         */
        Messages: {
            /**
             * 短信ID，可使用ListMessages查询短信状态。
             * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
             */
            Id: string;
            /**
             * 手机号码。
             * @example `1234567890`
             */
            PhoneNumber: string;
        }[];
        /**
         * 短信批处理ID，可使用ListMessages查询短信状态。
         * @example `62a72a20-8a9b-4060-a510-0c30a9340cba`
         */
        RequestId: string;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
