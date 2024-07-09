export interface DescribeFabricConsortiumMemberApprovalResponse {
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
    Result: {
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 通道创建策略
         * @example `Any`
         */
        ChannelCreatePolicy: string;
        /**
         * 确认时间
         * @example `1544411108000`
         */
        ConfirmTime: string;
        /**
         * 组织名称
         * @example `orgname`
         */
        OrganizationName: string;
        /**
         * 联盟名称
         * @example `name`
         */
        ConsortiumName: string;
        /**
         * 域名
         * @example `domain`
         */
        DomainName: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w****`
         */
        OrganizationId: string;
    }[];
}
