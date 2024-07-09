export interface CreateFabricOrganizationResponse {
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
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 组织节点数目
         * @example `3`
         */
        PeerCount: number;
        /**
         * 创建时间
         * @example `1544086901984`
         */
        CreateTime: string;
        /**
         * 联盟数量
         * @example `2`
         */
        ConsortiumCount: number;
        /**
         * 节点规格
         * @example `baisc`
         */
        SpecName: string;
        /**
         * 服务状态
         * @example `Pending`
         */
        ServiceState: string;
        /**
         * 所有者名称
         * @example `name`
         */
        OwnerName: string;
        /**
         * 集群状态
         * @example `Pending`
         */
        ClusterState: string;
        /**
         * 所有者用户ID
         * @example `1019556`
         */
        OwnerUid: number;
        /**
         * 所有者业务代码
         * @example `26842`
         */
        OwnerBid: string;
        /**
         * 域名代码
         * @example `name`
         */
        CodeName: string;
        /**
         * 组织描述
         * @example `desc`
         */
        OrganizationDescription: string;
        /**
         * 组织节点所在区域
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 组织ID
         * @example `zuzhiyumingyi-hc5d1bwlulg7`
         */
        OrganizationId: string;
        /**
         * 请求ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        RequestId: string;
        /**
         * 组织节点所在可用区
         * @example `zone`
         */
        ZoneId: string;
        /**
         * 组织用户数
         * @example `2`
         */
        UserCount: number;
        /**
         * 组织名称
         * @example `zuzhiyumingyi`
         */
        OrganizationName: string;
    };
}
