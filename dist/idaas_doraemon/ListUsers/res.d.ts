export interface ListUsersResponse {
    /**
     * 请求ID
     * @example `D0F570B0-89CE-07F2-B41E-F97E089E13C6`
     */
    RequestId: string;
    /**
     * 查询结果数据总数
     * @example `13`
     */
    TotalCount: number;
    /**
     * 用户列表
     */
    Users: {
        /**
         * 用户ID
         * @example `2323232676856745`
         */
        UserId: string;
        /**
         * 用户名
         * @example `lili`
         */
        UserName: string;
        /**
         * 用户昵称
         * @example `李丽`
         */
        UserDisplayName: string;
    }[];
}
