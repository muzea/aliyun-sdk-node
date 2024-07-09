export interface ListMessageGroupUserByIdResponse {
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
         * 查询到的用户总数。
         * @example `3`
         */
        Total: number;
        /**
         * 用户列表信息。
         */
        UserList: {
            /**
             * 用户是否被禁言。取值：
             * - true：禁言。
             * - false：没禁言。
             * @example `true`
             */
            IsMute: boolean;
            /**
             * 禁言类型，取值：
             * - group：消息组全员禁言。
             * - user：单个用户禁言。
             */
            MuteBy: string[];
            /**
             * 用户头像地址。
             * @example `"http://www.aliyundoc.com/xxyy.png"`
             */
            UserAvatar: string;
            /**
             * 用户信息自定义内容。
             * @example `12e`
             */
            UserExtension: string;
            /**
             * 用户ID。
             * @example `ad***`
             */
            UserId: string;
            /**
             * 用户昵称。
             * @example `xxyy`
             */
            UserNick: string;
        }[];
    };
}
