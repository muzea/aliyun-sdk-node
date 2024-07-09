export interface SendMessageResponse {
    /**
     * 请求ID
     * @example `QUERY_ACCOUNT_INFO_ERROR`
     */
    Code: string;
    /**
     * 接口调用返回的信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 请求ID
         * @example `0A466686-8F3A-55A6-93D8-A0225DC965C0`
         */
        RequestId: string;
        /**
         * 会话ID
         * @example `9929391f61ef9e1c0000000000000006`
         */
        SessionId: string;
    };
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
