export interface QueryWorkspaceUserListResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回成员列表的分页结果，成员的详细信息列表存放在返回参数Data中。
     */
    Result: {
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
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
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 空间成员信息。
         */
        Data: {
            /**
             * Quick BI用户ID。
             * @example `de4bc5f9429141cc8091cdd1c15b****`
             */
            UserId: string;
            /**
             * 阿里云账号ID。
             * @example `16020915****8429`
             */
            AccountId: string;
            /**
             * 昵称。
             * @example `我就是那个分析师大神`
             */
            NickName: string;
            /**
             * 阿里云账号名称。
             * @example `pop****@aliyunid.test`
             */
            AccountName: string;
            /**
             * 空间成员的预置空间角色信息。
             */
            Role: {
                /**
                 * 预置角色对应的编码。
                 * @example `role_workspace_admin`
                 */
                RoleCode: string;
                /**
                 * 预置角色的名称。
                 * @example `管理员`
                 */
                RoleName: string;
                /**
                 * 预置角色ID。取值范围：
                 * - 25：空间管理员
                 * - 26：空间开发者
                 * - 27：空间分析师
                 * - 30：空间查看者
                 * @example `25`
                 */
                RoleId: number;
            };
        }[];
    };
}
