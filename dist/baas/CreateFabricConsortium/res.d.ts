export interface CreateFabricConsortiumResponse {
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
         * 通道数量
         * @example `0`
         */
        ChannelCount: number;
        /**
         * 域名
         * @example `hello`
         */
        Domain: string;
        /**
         * 创建时间
         * @example `1544086901984`
         */
        CreateTime: string;
        /**
         * 规格
         * @example `basic`
         */
        SpecName: string;
        /**
         * orderer数量
         * @example `1`
         */
        OrdererCount: number;
        /**
         * 服务状态
         * @example `Pending`
         */
        ServiceState: string;
        /**
         * 集群状态
         * @example `Pending`
         */
        ClusterState: string;
        /**
         * 创建者uid
         * @example `1019556`
         */
        OwnerUid: number;
        /**
         * 创建者bid
         * @example `26842`
         */
        OwnerBid: string;
        /**
         * 域名
         * @example `lianmenyumingyi`
         */
        CodeName: string;
        /**
         * 地域
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 成员数量
         * @example `2`
         */
        MemberCount: number;
        /**
         * 通道策略
         * @example `Any`
         */
        ChannelPolicy: string;
        /**
         * orderer类型
         * @example `Kafka`
         */
        OrdererType: string;
        /**
         * 描述
         * @example `string`
         */
        Description: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
         */
        ConsortiumId: string;
        /**
         * 区域
         * @example `cn-hangzhou`
         */
        ZoneId: string;
        /**
         * 联盟名
         * @example `myconsortium`
         */
        ConsortiumName: string;
    };
}
