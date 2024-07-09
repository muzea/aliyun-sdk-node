export interface ListUsersResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Users: {
        /**
         * 用户列表信息。
         */
        UserInfo: {
            /**
             * 用户名。
             * @example `user1`
             */
            Name: string;
            /**
             * 添加用户的时间。
             * @example `2018-07-18T17:46:47`
             */
            AddTime: string;
            /**
             * 用户组。可能值：
             * - users：普通权限组，适用于只有提交、调试作业需求的普通用户。
             * - wheel：sudo权限组，适用于需要管理集群的管理员，除提交、调试作业外，还可以执行sudo命令进行安装软件、重启节点等操作。
             * @example `wheel`
             */
            Group: string;
        }[];
    };
}
