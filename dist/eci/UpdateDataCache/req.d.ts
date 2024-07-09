export interface UpdateDataCacheRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据缓存ID。
     * @example `edc-bp1a7n7uawwwol******`
     */
    "DataCacheId"?: string;
    /**
     * 安全组ID。
     * @example `sg-2ze81zoc3yl7a3we****`
     */
    "SecurityGroupId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-2ze23nqzig8inprou****`
     */
    "VSwitchId"?: string;
    /**
     * 数据缓存Bucket。默认为default。
     * @example `default`
     */
    "Bucket"?: string;
    /**
     * 数据缓存名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 数据缓存大小。
     * @example `20`
     */
    "Size"?: number;
    /**
     * 数据源信息。
     */
    "DataSource"?: {
        /**
         * 数据源类型。取值范围：
         * - URL
         * - NAS
         * - OSS
         * - SNAPSHOT
         * @example `URL`
         */
        Type: string;
        /**
         * 数据源的配置参数。
         */
        Options: any;
    };
    /**
     * 保留天数。过期会被清理。默认不过期。
     * @example `7`
     */
    "RetentionDays"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmzw2jz2z****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `2f22dc16-cad0-4d3f-87e5-91e604756547`
     */
    "ClientToken"?: string;
    /**
     * 弹性公网IP。如果VPC没有配置NAT网关，可以绑定弹性公网IP，以便拉取公网数据。
     * @example `eip-2zedsm5mfl3uhdj2d****`
     */
    "EipInstanceId"?: string;
    /**
     * 创建一个弹性公网IP（EIP）并绑定。
     * 如果VPC没有配置NAT网关，可以绑定EIP，以便拉取公网数据。
     */
    "EipCreateParam"?: {
        /**
         * EIP带宽。单位为Mbps。默认为5 Mbps。
         * @example `10`
         */
        Bandwidth: number;
        /**
         * 绑定已有的共享带宽包。
         * @example `cbwp-2zeukbj916scmj51m****`
         */
        CommonBandwidthPackage: string;
        /**
         * EIP的计量方式。取值范围：
         * - PayByBandwidth：按带宽计费
         * - PayByTraffic：按流量计费
         * @example `PayByTraffic`
         */
        InternetChargeType: string;
        /**
         * IP地址池ID。
         * EIP将从该IP地址池中分配。
         * IP地址池功能默认不开放。如需使用，请在配额中心申请IP地址池功能权益配额。
         * @example `pippool-bp187arfugi543y1s****`
         */
        PublicIpAddressPoolId: string;
        /**
         * EIP的线路类型。取值范围：
         * - BGP（默认值）：BGP（多线）线路
         * - BGP_PRO：BGP（多线）精品线路
         * @example `BGP`
         */
        ISP: string;
    };
}
