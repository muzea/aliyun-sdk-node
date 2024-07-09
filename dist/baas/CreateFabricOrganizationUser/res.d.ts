export interface CreateFabricOrganizationUserResponse {
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
         * @example `1544411108000`
         */
        ExpireTime: string;
        /**
         * 创建时间
         * @example `1544086901984`
         */
        CreateTime: string;
        /**
         * 组织ID
         * @example `peers-yidio-1tuigx42b****`
         */
        OrganizationId: string;
        /**
         * 用户名
         * @example `username`
         */
        Username: string;
        /**
         * 全名
         * @example `fullname`
         */
        Fullname: string;
    };
}
