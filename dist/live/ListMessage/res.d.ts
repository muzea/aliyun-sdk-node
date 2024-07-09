export interface ListMessageResponse {
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
         * 是否还有下一页，取值：
         * - true：有下一页。
         * - false：没有下一页。
         * @example `false`
         */
        HasMore: boolean;
        /**
         * 消息列表。
         */
        MessageList: {
            /**
             * 消息体，JSONString类型。
             * @example `test`
             */
            Data: string;
            /**
             * 消息组ID。
             * @example `AE35-****-T95F`
             */
            GroupId: string;
            /**
             * 消息ID。
             * @example `qt***`
             */
            MessageId: string;
            /**
             * 消息发送者ID。
             * @example `yi***`
             */
            SenderId: string;
            /**
             * 消息类型。
             * @example `10002`
             */
            Type: number;
        }[];
    };
}
