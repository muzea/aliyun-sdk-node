export interface ListUsersAsyncResponse {
    /**
     * 每页显示的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9A05F620-ED46-4A57-95F1-C67D6D3C5DD2`
     */
    RequestId: string;
    /**
     * 显示的页码，起始值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 用户总数。
     * @example `1`
     */
    TotalCount: number;
    Users: {
        /**
         * 用户列表。
         */
        UserInfo: {
            /**
             * 用户名。
             * @example `testuser`
             */
            Name: string;
            /**
             * 创建时间。
             * @example `2022-09-28T09:05:26.000Z`
             */
            AddTime: string;
            /**
             * 用户组。
             * @example `wheel`
             */
            Group: string;
            /**
             * 用户ID。
             * @example `1000`
             */
            UserId: string;
            /**
             * 用户组ID。
             * @example `10`
             */
            GroupId: string;
        }[];
    };
    /**
     * 异步任务ID。
     * @example `t-sh03egi3mls****`
     */
    AsyncId: string;
    /**
     * 异步任务状态。
     * @example `Success`
     */
    AsyncStatus: string;
}
