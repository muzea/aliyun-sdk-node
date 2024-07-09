export interface AddUserResponse {
    /**
     * 是否请求成功。取值范围：
     * -  true：请求成功
     * -  false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回新增阿里云用户的详细信息。
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
         * Quick BI中的UserID。
         * @example `b5d8fd9348cc4327****afb604`
         */
        UserId: string;
        /**
         * 是否是权限管理员。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        AuthAdminUser: boolean;
        /**
         * 阿里云账号昵称。
         * @example `张三`
         */
        NickName: string;
        /**
         * 是否是管理员。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        AdminUser: boolean;
        /**
         * 阿里云账户。
         * @example `xxxxxx@163.com`
         */
        AccountName: string;
        RoleIdList: number[];
    };
}
