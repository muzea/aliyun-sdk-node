export interface DescribeFabricOrganizationResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 组织的详细列表
     */
    Result: {
        /**
         * 域名
         * @example `org1.alibabacloudbaas.com`
         */
        Domain: string;
        /**
         * Peer节点数
         * @example `2`
         */
        PeerCount: number;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 联盟数
         * @example `2`
         */
        ConsortiumCount: number;
        /**
         * 规格名
         * @example `basic`
         */
        SpecName: string;
        /**
         * 创建者
         * @example `uid-23434`
         */
        OwnerName: string;
        /**
         * 创建者Uid
         * @example `23434`
         */
        OwnerUid: number;
        /**
         * 创建者Bid
         * @example `2544`
         */
        OwnerBid: string;
        /**
         * 域名前缀
         * @example `org1`
         */
        CodeName: string;
        /**
         * 组织描述
         * @example `This is org1`
         */
        OrganizationDescription: string;
        /**
         * 地域
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
         */
        OrganizationId: string;
        /**
         * 成员服务提供者
         * @example `org1MSP`
         */
        MSP: string;
        /**
         * 请求ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        RequestId: string;
        /**
         * 组织CA节点地址
         * @example `https://ca1.org1.alibabacloudbaas.com:31154`
         */
        CAUrl: string;
        /**
         * 组织CA节点名称
         * @example `client`
         */
        CANAME: string;
        /**
         * 可用区
         * @example `cn-hangzhou-1a`
         */
        ZoneId: string;
        /**
         * 用户数
         * @example `2`
         */
        UserCount: number;
        /**
         * 组织名称
         * @example `org1`
         */
        OrganizationName: string;
        /**
         * 标签列表
         */
        Tags: {
            /**
             * 标签键
             * @example `BlockChainOwner`
             */
            Key: string;
            /**
             * 标签值
             * @example `DepartmentA`
             */
            Value: string;
        }[];
    };
}
