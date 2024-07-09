export interface BatchGetOnlineUsersResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 对象数组
         */
        OnlineUsers: {
            /**
             * 加入消息组的UTC时间戳。单位：毫秒
             * @example `12**45`
             */
            JoinTime: number;
            /**
             * 是否在线， 取值：
             * - **true**：在线。
             * - **false**：不在线。
             * @example `true`
             */
            Online: boolean;
            /**
             * 用户UserId。
             * @example `de1**a0`
             */
            UserId: string;
        }[];
    };
}
