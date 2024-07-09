export interface DescribeFabricConsortiumMembersResponse {
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
     * 联盟的组织信息
     */
    Result: {
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 描述
         * @example `description`
         */
        Description: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
         */
        ConsortiumId: string;
        /**
         * 组织名
         * @example `name`
         */
        OrganizationName: string;
        /**
         * 加入联盟的时间
         * @example `1544411108000`
         */
        JoinedTime: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
         */
        OrganizationId: string;
    }[];
}
