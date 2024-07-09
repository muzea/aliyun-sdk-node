export interface QueryUserListResponse {
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
     * 返回用户列表的分页结果，组织成员的详细信息列表存放在返回参数Data中。
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
         * 返回请求的用户列表。
         */
        Data: {
            /**
             * 组织成员的用户类型。取值范围：
             * - 1 ：开发者
             * - 2 ：访问者
             * - 3 ：分析师
             * @example `1`
             */
            UserType: number;
            /**
             * Quick BI中的UserID。
             * @example `fe67f61a35a94b7da1a34ba174a7****`
             */
            UserId: string;
            /**
             * 是否绑定了权限管理员角色。取值范围：
             * - true：是
             * - false：否
             * <notice>参数已过期不推荐使用，以RoleIdList参数为准</notice>
             * @example `true`
             */
            AuthAdminUser: boolean;
            /**
             * 阿里云账号ID。非Ram自助读取添加的用户，需要登录后才能获取到阿里云ID。
             * @example `1355********`
             */
            AccountId: string;
            /**
             * 组织成员的昵称。
             * @example `测试用户`
             */
            NickName: string;
            /**
             * 是否绑定了组织管理员角色。取值范围：
             * - true：是
             * - false：否
             * <notice>参数已过期不推荐使用，以RoleIdList参数为准</notice>
             * @example `true`
             */
            AdminUser: boolean;
            /**
             * 阿里云账号名称。
             * @example `测试用户`
             */
            AccountName: string;
            /**
             * 用户绑定的组织角色ID列表。
             */
            RoleIdList: number[];
            /**
             * 加入日期
             * @example `1718691704000`
             */
            JoinedDate: number;
            /**
             * 最后登录时间。
             * @example `1718761320681`
             */
            LastLoginTime: number;
        }[];
    };
}
