export interface DescribeFabricOrganizationUsersResponse {
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
     * 组织的用户列表
     */
    Result: {
        /**
         * 过期时间
         * @example `1533025590`
         */
        ExpireTime: string;
        /**
         * ABAC属性
         * @example `foo=foo1,bar=bar1`
         */
        Attrs: string;
        /**
         * 调用者业务ID
         * @example `26842`
         */
        CallerBid: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 全名
         * @example `name`
         */
        FullName: string;
        /**
         * 调用者用户ID
         * @example `84927598****`
         */
        CallerUid: number;
        /**
         * 用户名
         * @example `username`
         */
        Username: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
         */
        OrganizationId: string;
        /**
         * 地域ID
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
