export interface ListMessageGroupUserResponse {
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
         * 消息组用户总数。
         * @example `2`
         */
        Total: number;
        /**
         * 用户列表。
         */
        UserList: {
            /**
             * 加入消息组的UTC时间戳。
             * @example `12**45`
             */
            JoinTime: number;
            /**
             * 用户UserId。
             * @example `de1**a0,hu**9`
             */
            UserId: string;
        }[];
    };
}
