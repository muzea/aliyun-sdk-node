export interface ListMuteGroupUserResponse {
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
         * 禁言成员总数。
         * @example `2`
         */
        Total: number;
        /**
         * 禁言用户列表。
         */
        UserList: {
            /**
             * 禁言用户ID。
             * @example `1sd***,yu***`
             */
            UserId: string;
        }[];
    };
}
