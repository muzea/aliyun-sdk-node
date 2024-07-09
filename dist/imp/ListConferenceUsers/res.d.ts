export interface ListConferenceUsersResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 分页查询连麦用户信息的返回结果。
     * @example `true`
     */
    Result: {
        /**
         * 连麦用户列表。
         * @example `myApp`
         */
        ConferenceUserList: {
            /**
             * 用户ID。
             * @example `4*****9`
             */
            UserId: string;
            /**
             * 用户状态。取值：
             * - **Init**：初始状态。
             * - **OnJoining**：呼叫中。
             * - **Active**：连麦中。
             * - **JoinFail**：连麦失败。
             * - **Kicked**：被踢出。
             * - **Leave**：离开连麦。
             * @example `active`
             */
            Status: string;
        }[];
        /**
         * 是否还有数据。
         * @example `true`
         */
        HasMore: boolean;
        /**
         * 总条目数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 总页数。
         * @example `100`
         */
        PageTotal: number;
    };
}
