export interface CreateDataCacheRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 创建数据缓存过程中生成的ECI实例所属的安全组ID。
     * @example `sg-2ze81zoc3yl7a3we****`
     */
    "SecurityGroupId"?: string;
    /**
     * 创建数据缓存过程中生成的ECI实例所属的交换机ID。
     * @example `vsw-bp1jrgfqqy54kg5hc****`
     */
    "VSwitchId"?: string;
    /**
     * 数据的存储空间。默认为default。支持自定义，以便进行业务分组和避免路径冲突。
     * > eci-system为ECI保留空间，不可使用。
     * @example `default`
     */
    "Bucket"?: string;
    /**
     * 数据存储的路径。
     * @example `/model/test`
     */
    "Path"?: string;
    /**
     * 数据缓存名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 数据缓存大小。单位为GiB，默认为20 GiB。请根据实际数据量评估所需大小。
     * @example `30`
     */
    "Size"?: number;
    /**
     * 数据源。
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
     * 数据缓存绑定的标签列表。
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
     * 资源组ID。
     * @example `rg-2df3isufhi38****`
     */
    "ResourceGroupId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-****-12d3-****-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 绑定已有的弹性公网IP（EIP）。
     * 如果VPC没有配置NAT网关，可以绑定EIP，以便拉取公网数据。
     * @example `eip-uf66jeqopgqa9hdn****`
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
         * @example `pippool-2vc4xdtjhwl4t0go5****`
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
