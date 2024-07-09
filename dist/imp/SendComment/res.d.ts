export interface SendCommentResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用发送房间弹幕消息的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 返回的弹幕消息数据模型。
         * @example `0io**Fs6Q384`
         */
        CommentVO: {
            /**
             * 弹幕消息的唯一ID。
             * @example `09***f8`
             */
            CommentId: string;
            /**
             * 弹幕消息发送者的用户ID。
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
             * 扩展字段，key-value形式，其值等同于请求时传递的Extension参数。
             */
            Extension: any;
        };
    };
}
