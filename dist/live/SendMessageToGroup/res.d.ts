export interface SendMessageToGroupResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 消息ID。
         * @example `qt***`
         */
        MessageId: string;
    };
}
