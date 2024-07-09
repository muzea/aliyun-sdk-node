export interface QueryUserInfoByUserIdResponse {
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
     * 返回的组织用户信息。
     */
    Result: {
        /**
         * 组织成员的角色类型。取值范围：
         * - 1 ：开发者
         * - 2 ：访问者
         * - 3 ：分析师
         * @example `1`
         */
        UserType: number;
        /**
         * 邮箱。
         * @example `1386587****@163.com`
         */
        Email: string;
        /**
         * Quick BI中的UserID。
         * @example `fe67f61a35a94b7da1a34ba174a7****`
         */
        UserId: string;
        /**
         * 是否为权限管理员。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        AuthAdminUser: boolean;
        /**
         * 阿里云账号ID。
         * @example `135****5848`
         */
        AccountId: string;
        /**
         * 昵称。
         * @example `测试用户`
         */
        NickName: string;
        /**
         *
         * 是否为组织管理员。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        AdminUser: boolean;
        /**
         * 手机号码。
         * @example `1386587****`
         */
        Phone: string;
        /**
         * 阿里云账号名称。
         * @example `1386587****@163.com`
         */
        AccountName: string;
        RoleIdList: number[];
    };
}
