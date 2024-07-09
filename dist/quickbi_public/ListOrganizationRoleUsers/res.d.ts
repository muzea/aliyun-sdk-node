export interface ListOrganizationRoleUsersResponse {
    /**
     * 请求ID。
     * @example `BCE45E6D-9304-4F94-86BB-5A772B1615FF`
     */
    RequestId: string;
    /**
     * 返回组织角色下的用户列表。
     */
    Result: {
        /**
         * 总行数。
         * @example `10`
         */
        TotalNum: number;
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 页码。
         * @example `10`
         */
        PageNum: number;
        /**
         * 请求接口时设置的每页行数。
         * @example `1`
         */
        PageSize: number;
        /**
         * 用户列表。
         */
        Data: {
            /**
             * 组织成员在Quick BI的UserID。
             * @example `b5d8fd9348cc4327****afb604`
             */
            UserId: string;
            /**
             * 组织成员的昵称。
             * @example `测试用户`
             */
            NickName: string;
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
