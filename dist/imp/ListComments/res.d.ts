export interface ListCommentsResponse {
    /**
     * 请求ID。
     * @example `ER52****O9CA`
     */
    RequestId: string;
    /**
     * 调用批量查询弹幕消息的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 弹幕消息列表。
         */
        CommentVOList: {
            /**
             * 应用ID。
             * @example `7m***q`
             */
            AppId: string;
            /**
             * 房间ID。
             * @example `AE35****T95F`
             */
            RoomId: string;
            /**
             * 弹幕消息的唯一ID标识。
             * @example `09***f8`
             */
            CommentId: string;
            /**
             * 弹幕消息的发送者ID标识。
             * @example `62**59`
             */
            SenderId: string;
            /**
             * 弹幕消息发送者的昵称。
             * @example `Tom`
             */
            SenderNick: string;
            /**
             * 弹幕消息的创建时间，Unix时间戳，单位：毫秒。
             * @example `1628438400000`
             */
            CreateAt: number;
            /**
             * 弹幕消息的内容。
             * @example `Hello,World`
             */
            Content: string;
            /**
             * 扩展字段。
             */
            Extension: any;
        }[];
        /**
         * 是否还有下一页数据。true表示还有，false表示没有。
         * @example `true`
         */
        HasMore: boolean;
        /**
         * 批量查询弹幕消息的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询弹幕消息列表的总页数。
         * @example `2`
         */
        PageTotal: number;
    };
}
