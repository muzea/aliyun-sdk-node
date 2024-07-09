export interface ListLiveMessageGroupMessagesResponse {
    /**
     * 请求ID。
     * @example `1668FDC3-63D7-102F-B5D4-3D2F91D1****`
     */
    RequestId: string;
    /**
     * 需要查询的群组的GroupID。
     * @example `grouptest`
     */
    GroupId: string;
    /**
     * 下一页的起始位置，若没有下一页则为0。
     * @example `0`
     */
    NextPageToken: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    Hasmore: boolean;
    /**
     * 消息列表。
     */
    MessageList: {
        /**
         * 消息参数详情。
         */
        Sender: {
            /**
             * 消息发送用户的ID。
             * @example `uid2`
             */
            UserId: string;
            /**
             * 消息发送用户的扩展信息。
             * @example `testusermeta2`
             */
            UserInfo: string;
        };
        /**
         * 消息体。
         * @example `step2 helo, cc group`
         */
        Body: string;
        /**
         * 消息创建时间。用UNIX时间戳表示，单位：秒。
         * @example `1697081134`
         */
        Timestamp: number;
        /**
         * 消息标识。
         * @example `c-1-1-0`
         */
        MsgTid: string;
        /**
         * 消息类型。
         * @example `2`
         */
        MsgType: number;
        /**
         * 消息序列号。
         * @example `1`
         */
        SeqNumber: number;
        /**
         * 总消息数量。
         * @example `1`
         */
        TotalMessages: number;
    }[];
}
