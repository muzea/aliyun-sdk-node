export interface ResetFabricOrganizationUserPasswordResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 结果
     */
    Result: {
        /**
         * 密码
         * @example `password`
         */
        Password: string;
        /**
         * 过期时间
         * @example `1533025590`
         */
        ExpireTime: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w****`
         */
        OrganizationId: string;
        /**
         * 用户名
         * @example `username`
         */
        Username: string;
        /**
         * 全名
         * @example `username`
         */
        Fullname: string;
    };
}
