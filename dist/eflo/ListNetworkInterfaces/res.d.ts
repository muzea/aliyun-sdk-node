export interface ListNetworkInterfacesResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `039C3C3A-3C37-5672-80D5-D8CD48C676D1`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 总记录数。
         * @example `0`
         */
        Total: number;
        /**
         * 返回的数据。
         */
        Data: {
            /**
             * 租户ID。
             * @example `1620939556166279
            `
             */
            TenantId: string;
            /**
             * 地域ID。
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 灵骏网卡ID。
             * @example `lni-2ze50voovmtswn328ogm`
             */
            NetworkInterfaceId: string;
            /**
             * 所属机器ID。
             * @example `2d53f5c204e7476dae69177e7fa6f19c`
             */
            NodeId: string;
            /**
             * 灵骏网段（VPD）基本信息。
             */
            VpdBaseInfo: {
                /**
                 * 灵骏网段（VPD）实例ID。
                 * @example `vpd-d3isyds4`
                 */
                VpdId: string;
                /**
                 * 灵骏网段（VPD）实例名称。
                 * @example `vpd-1
                `
                 */
                VpdName: string;
                /**
                 * 灵骏网段（VPD）的网段。
                 * - 建议您使用RFC私网地址作为灵骏网段的网段如10.0.0.0/8，172.16.0.0/12，192.168.0.0/16，多灵骏网段互通场景或灵骏网段和VPC互通场景需确保地址规划不能冲突。
                 * - 您也可以使用除 100.64.0.0/10、224.0.0.0/4、127.0.0.0/8 或 169.254.0.0/16 及其子网外的自定义地址段作为VPD的主IPv4网段。
                 * 默认值：空。
                 * @example `10.0.0.0/16`
                 */
                Cidr: string;
                /**
                 * 创建时间。
                 * @example `1668158213000`
                 */
                CreateTime: string;
            };
            /**
             * 可用区ID。
             * @example `cn-wulanchabu-b`
             */
            ZoneId: string;
            /**
             * 灵骏子网（Subnet）基本信息。
             */
            SubnetBaseInfo: {
                /**
                 * 灵骏子网（Subnet）实例ID。
                 * @example `subnet-yjnqn5ef`
                 */
                SubnetId: string;
                /**
                 * 灵骏子网（Subnet）实例名称。
                 * @example `subnet-1`
                 */
                SubnetName: string;
                /**
                 * 灵骏子网（Subnet）的网段。
                 * - 子网的网段必须是其所属灵骏网段的真子集且掩码需在16位到29位之间，可提供 8 ~ 65536 个地址。 例如，灵骏网段的网段为192.168.0.0/16，该灵骏网段下的子网的网段为 192.168.0.0/17 ~ 192.168.0.0/29。
                 * - 每个子网网段的第一个和最后三个IP地址为系统保留地址。 例如，子网的网段为192.168.1.0/24，192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这四个IP地址为系统保留地址。
                 * <props="china">关于CIDR地址块的详细信息，请参见[什么是CIDR](https://help.aliyun.com/knowledge_detail/40637.html#title-gu4-uzk-12r)。</props>
                 * <props="intl">关于CIDR地址块的详细信息，请参见[什么是CIDR](https://www.alibabacloud.com/help/doc-detail/40637.htm#title-gu4-uzk-12r)。</props>
                 * <props="partner">关于CIDR地址块的详细信息，请参见[什么是CIDR](https://partners-intl.aliyun.com/help/doc-detail/40637.htm#title-gu4-uzk-12r)。</props>
                 * 默认值：空。
                 * @example `10.0.0.0/24`
                 */
                Cidr: string;
                /**
                 * 创建时间。
                 * @example `1623656472000`
                 */
                CreateTime: string;
            };
            /**
             * IP地址。
             * @example `10.0.0.13`
             */
            Ip: string;
            /**
             * 服务网卡地址。
             * @example `00-ff-84-15-ba-67`
             */
            ServiceMac: string;
            /**
             * 辅助私网IP&MAC地址集合
             */
            PrivateIpAddressMacGroup: {
                /**
                 * IP唯一标识。
                 * @example `sip-1asjd3xg`
                 */
                IpName: string;
                /**
                 * 辅助私网IP地址。
                 * @example `10.0.0.14`
                 */
                PrivateIpAddress: string;
                /**
                 * 辅助私网MAC地址。
                 * @example `00:25:9d:00:20:20`
                 */
                IpAddressMac: string;
                /**
                 * 实例状态。
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
             * 端口。
             */
            Ethernet: string[];
            /**
             * 状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 网关。
             * @example `10.0.0.253`
             */
            Gateway: string;
            /**
             * 创建时间。
             * @example `1669734207000`
             */
            CreateTime: string;
            /**
             * 网卡私有辅助IP额度。
             * @example `6`
             */
            Quota: number;
            /**
             * NC类型。
             * @example `GPU`
             */
            NcType: string;
            /**
             * 端口名称。
             * @example `bond0`
             */
            NetworkInterfaceName: string;
        }[];
    };
}
