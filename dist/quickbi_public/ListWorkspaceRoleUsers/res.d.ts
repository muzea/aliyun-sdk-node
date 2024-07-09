export interface ListWorkspaceRoleUsersResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回空间角色下的用户列表。
     */
    Result: {
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         *
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 请求接口时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 用户列表。
         */
        Data: {
            /**
             * 组织成员在Quick BI的UserID。
             * @example `b5d8fd9348cc4327****afb604
            `
             */
            UserId: string;
            /**
             * 组织成员的昵称。
             * @example `测试用户`
             */
            NickName: string;
            /**
             * 工作空间名称。
             * @example `测试空间`
             */
            WorkspaceName: string;
            /**
             * 工作空间ID。
             * @example `7350a155-0e94-4c6c-8620-57bbec38****`
             */
            WorkspaceId: string;
        }[];
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
