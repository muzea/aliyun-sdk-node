export interface DescribeFabricOrganizationDeletableResponse {
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
         * 是否可删除
         * @example `true`
         */
        Deletable: boolean;
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 可用区
         * @example `zone`
         */
        ZoneId: string;
        /**
         * 组织名
         * @example `orgname`
         */
        OrganizationName: string;
        /**
         * 域名前缀
         * @example `name`
         */
        CodeName: string;
        /**
         * 组织描述
         * @example `desc`
         */
        OrganizationDescription: string;
        /**
         * 地域
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w****`
         */
        OrganizationId: string;
    };
}
