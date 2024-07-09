export interface DescribeNetworkPackagesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 公网精品带宽信息列表。
     */
    NetworkPackages: {
        /**
         * 公网精品带宽ID。
         * @example `np-amtp8e8q1o9e4****`
         */
        NetworkPackageId: string;
        /**
         * 公网精品带宽的带宽大小。单位：Mbps。
         * @example `10`
         */
        Bandwidth: number;
        /**
         * 公网精品带宽到期时间。
         * - 如果是包年包月公网精品带宽，则返回实际的到期时间。
         * - 如果是按年付费公网精品带宽，则返回`2099-12-31T15:59:59Z`。
         * @example `2099-12-31T15:59:59Z`
         */
        ExpiredTime: string;
        /**
         * 创建时间。
         * @example `2021-05-10T02:35:26Z`
         */
        CreateTime: string;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-363353****`
         */
        OfficeSiteId: string;
        /**
         * 付费类型。
         * @example `PostPaid`
         */
        PayType: string;
        /**
         * 公网精品带宽的计费方式。
         * - 当参数`PayType`取值为`PrePaid`时，取值范围：
         *     - PayByBandwidth：按固定带宽计费。
         * - 当参数`PayType`取值为`PostPaid`时，取值范围：
         *     - PayByTraffic：按使用流量计费。
         *     - PayByBandwidth：按固定带宽计费。
         * @example `PayByTraffic`
         */
        InternetChargeType: string;
        /**
         * 预留网络带宽的计费方式。
         * @example `PayByBandwidth`
         */
        ReservationInternetChargeType: string;
        /**
         * 预留网络带宽峰值。单位：Mbps。
         * @example `20`
         */
        ReservationBandwidth: number;
        /**
         * 预留网络带宽生效时间。
         * @example `2021-07-10T00:00:00Z`
         */
        ReservationActiveTime: string;
        /**
         * 公网精品带宽状态。
         * @example `InUse`
         */
        NetworkPackageStatus: string;
        /**
         * 办公网络名称。
         * @example `default`
         */
        OfficeSiteName: string;
        /**
         * 办公网络类型。
         * @example `basic`
         */
        OfficeSiteVpcType: string;
        /**
         * 公网精品带宽的公网出口IP地址。
         */
        EipAddresses: string[];
        /**
         * 业务状态。
         * @example `Normal`
         */
        BusinessStatus: string;
    }[];
}
