export interface BeeBotAssociateResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 返回结果 OK 为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 提示信息，当返回异常时有值。
     * @example `None`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 本条会话应答消息ID。
         * @example `1eb47d7a1706429081e90c83c62c2f00`
         */
        MessageId: string;
        /**
         * 会话ID。
         * @example `93f11165a2a24289a6f869760e8cb3f3`
         */
        SessionId: string;
        /**
         * 联想推荐的列表。
         */
        Associate: {
            /**
             * 附带信息。
             * @example `{}`
             */
            Meta: string;
            /**
             * 关联问题的标题。
             * @example `公积金提取的政策`
             */
            Title: string;
        }[];
    };
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
