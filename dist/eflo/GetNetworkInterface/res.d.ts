export interface GetNetworkInterfaceResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容。（当资源存在依赖资源时，会返回存在的依赖资源）
     */
    Content: {
        /**
         * 租户ID
         * @example `1655449505171`
         */
        TenantId: string;
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 灵骏网卡ID
         * @example `lni-f8z4scmfh0u4ewv6vdd8`
         */
        NetworkInterfaceId: string;
        /**
         * 所属机器ID
         * @example `masterintranett2fdth5fkoocg`
         */
        NodeId: string;
        /**
         * 灵骏网段（VPD）基本信息
         */
        VpdBaseInfo: {
            /**
             * 灵骏网段（VPD）实例ID
             * @example `vpd-ppdunxzc`
             */
            VpdId: string;
            /**
             * 灵骏网段（VPD）实例名称
             * @example `vpd-1`
             */
            VpdName: string;
            /**
             * 灵骏子网的网段。
             * - 子网的网段必须是其所属灵骏网段的真子集且掩码需在16位到29位之间，可提供 8 ~ 65536 个地址。 例如，灵骏网段的网段为192.168.0.0/16，该灵骏网段下的子网的网段为 192.168.0.0/17 ~ 192.168.0.0/29。
             * - 每个子网网段的第一个和最后三个IP地址为系统保留地址。 例如，子网的网段为192.168.1.0/24，192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这四个IP地址为系统保留地址。
             * <props="china">关于CIDR地址块的详细信息，请参见[什么是CIDR](https://help.aliyun.com/knowledge_detail/40637.html#title-gu4-uzk-12r)。</props>
             * <props="intl">关于CIDR地址块的详细信息，请参见[什么是CIDR](https://www.alibabacloud.com/help/doc-detail/40637.htm#title-gu4-uzk-12r)。</props>
             * <props="partner">关于CIDR地址块的详细信息，请参见[什么是CIDR](https://partners-intl.aliyun.com/help/doc-detail/40637.htm#title-gu4-uzk-12r)。</props>
             * 默认值：空。
             * @example `172.18.0.0/24`
             */
            Cidr: string;
            /**
             * 创建时间
             * @example `1678273219000`
             */
            CreateTime: string;
        };
        /**
         * 可用区ID
         * @example `cn-wulanchabu-b`
         */
        ZoneId: string;
        /**
         * 灵骏子网（Subnet）基本信息
         */
        SubnetBaseInfo: {
            /**
             * 灵骏子网（Subnet）实例ID
             * @example `subnet-urb01blo`
             */
            SubnetId: string;
            /**
             * 灵骏子网（Subnet）实例名称
             * @example `subnet-1`
             */
            SubnetName: string;
            /**
             * 网络地址段
             * @example `116.233.21.57/32`
             */
            Cidr: string;
            /**
             * 创建时间
             * @example `1678273219000`
             */
            CreateTime: string;
        };
        /**
         * IP地址
         * @example `203.107.****`
         */
        Ip: string;
        /**
         * 服务网卡地址
         * @example `01-00-5e-00-00-16`
         */
        ServiceMac: string;
        /**
         * 辅助私网IP&MAC地址集合
         */
        PrivateIpAddressMacGroup: {
            /**
             * IP唯一标识
             * @example `sip-1asjd3xg`
             */
            IpName: string;
            /**
             * 辅助私网IP地址
             * @example `172.23.161.57`
             */
            PrivateIpAddress: string;
            /**
             * 辅助私网MAC地址
             * @example `01-00-5e-00-00-16`
             */
            IpAddressMac: string;
            /**
             * 实例状态
             * @example `Available`
             */
            Status: string;
            /**
             * 描述信息
             * @example `test测试`
             */
            Description: string;
            /**
             * 错误信息。（当实例状态为异常时，提示异常原因）
             * @example `success`
             */
            Message: string;
        }[];
        /**
         * 端口
         */
        Ethernet: string[];
        /**
         * 状态
         * @example `Available`
         */
        Status: string;
        /**
         * 网关
         * @example `172.24.20.254`
         */
        Gateway: string;
        /**
         * 创建时间
         * @example `1678273219000`
         */
        CreateTime: string;
        /**
         * 网卡私有辅助IP额度
         * @example `0`
         */
        Quota: number;
        /**
         * NC类型
         * @example `DEFAULT`
         */
        NcType: string;
        /**
         * 网卡名称
         * @example `bond0`
         */
        NetworkInterfaceName: string;
    };
}
