export interface DescribeFabricOrganizationMembersResponse {
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
     * 200
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 结果
     */
    Result: {
        /**
         * domain
         * @example `domain`
         */
        Domain: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 描述
         * @example `description`
         */
        Description: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 组织名称
         * @example `name`
         */
        OrganizationName: string;
        /**
         * 加入联盟的时间
         * @example `1533025590`
         */
        JoinedTime: string;
        /**
         * 联盟名称
         * @example `name`
         */
        ConsortiumName: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w****`
         */
        OrganizationId: string;
    }[];
}
