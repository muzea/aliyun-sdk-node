export interface GetVccResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `CAD09E47-B651-5206-B2DC-3AB78C8EB446`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 租户ID
         * @example `1620939556166279`
         */
        TenantId: string;
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 可用区ID
         * @example `cn-wulanchabu-b`
         */
        ZoneId: string;
        /**
         * 灵骏连接实例ID
         * @example `vcc-cn-cqf2xh40101`
         */
        VccId: string;
        /**
         * 灵骏网段实例ID
         * @example `vpd-d3isyds4`
         */
        VpdId: string;
        /**
         * 专有网络ID；[什么是专有网络](https://help.aliyun.com/document_detail/34217.html)
         * 可调用[DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0)接口查询指定VPC。
         * @example `vpc-j6ctp4n75306phv5tmpsm`
         */
        VpcId: string;
        /**
         * 交换机实例ID。[专有网络交换机](https://help.aliyun.com/document_detail/100380.html)。
         * 你可以调用[DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html)接口查询已创建的交换机。
         * @example `vsw-uf6u8473r84e6n1n19he5`
         */
        VSwitchId: string;
        /**
         * 云企业网实例的ID；[什么是云企业网?](https://help.aliyun.com/document_detail/181681.html)
         * 你可用调用[DescribeCens](https://help.aliyun.com/document_detail/468215.htm)查询当前阿里云账号下的云企业网实例信息。
         * @example `cen-m2iskbojlvda5w65fp`
         */
        CenId: string;
        /**
         * 灵骏连接实例名称
         * @example `vcc-heyuan-backup`
         */
        VccName: string;
        /**
         * 物理专线接入点的ID：
         * - **ap-cn-wulanchabu-jn-ts-A**：乌兰察布-集宁-A
         * - **ap-cn-heyuan-yc-ts-SA127**：河源-源城-A
         * @example `ap-cn-wulanchabu-jn-ts-A`
         */
        AccessPointId: string;
        /**
         * 提供接入物理线路的运营商。取值：
         * - **CO**：中国其他
         * @example `CO`
         */
        LineOperator: string;
        /**
         * 规格；取值：
         * - **Large** ：大型
         * @example `Large`
         */
        Spec: string;
        /**
         * 物理专线接入端口类型。取值：
         * - **100GBase-LR**：十万兆单模光口（10千米）
         * @example `100GBase-LR`
         */
        PortType: string;
        /**
         * 计费周期。取值：
         * - **Month**：按月计费
         * - **Year**：按年计费
         * @example `Month`
         */
        PricingCycle: string;
        /**
         * 实例的付费类型，返回：
         * - **PREPAY**：包年包月
         * - **POSTPAY**：按量付费
         * @example `PrePay`
         */
        PayType: string;
        /**
         * 续费周期
         * @example `1`
         */
        Duration: string;
        /**
         * 实例状态。可能值：
         * - **Available**：正常 。
         * - **Not Available**：不可用。
         * - **Executing**：执行中。
         * - **Deleting**：删除中。
         * @example `Available`
         */
        Status: string;
        /**
         * 当前节点
         * @example `创建物理专线1`
         */
        CurrentNode: string;
        /**
         * 网络计费类型。
         * - **PayByTraffic**：按流量计费
         * - **PayByBandwidth**：按带宽计费
         * @example `PayByBandwidth`
         */
        InternetChargeType: string;
        /**
         * 带宽
         * @example `1G`
         */
        BandwidthStr: string;
        /**
         * 错误信息。（当实例状态为异常时，提示异常原因）
         * @example `成功`
         */
        Message: string;
        /**
         * 创建时间
         * @example `1648085472000`
         */
        CreateTime: string;
        /**
         * 修改时间
         * @example `1648085472000`
         */
        GmtModified: string;
        /**
         * 商品代码
         * @example `bccluster_cloudconnectionpre_public_cn`
         */
        CommodityCode: string;
        /**
         * BGP网段
         * @example `10.4.0.0/24`
         */
        BgpCidr: string;
        /**
         * 过期时间
         * @example `1678379917000`
         */
        ExpirationDate: string;
        /**
         * 灵骏网段信息；（适用于老版本的灵骏连接直接绑定灵骏网段的场景）
         */
        VpdBaseInfo: {
            /**
             * 灵骏网段实例ID
             * @example `vpd-ppdunxzc`
             */
            VpdId: string;
            /**
             * 灵骏网段实例名称
             * @example `yzp-rg-test3`
             */
            VpdName: string;
            /**
             * 网络地址段
             * @example `172.18.0.0/24`
             */
            Cidr: string;
            /**
             * 创建时间
             * @example `1678379917000`
             */
            CreateTime: string;
        };
        /**
         * 灵骏HUB是否已绑定网络实例
         * - **true** : 已绑定
         * - **false** : 未绑定
         * @example `true
        `
         */
        AttachErStatus: boolean;
        /**
         * 已绑定的灵骏HUB信息列表
         */
        ErInfos: {
            /**
             * 创建时间
             * @example `1678379917000`
             */
            CreateTime: string;
            /**
             * 修改时间
             * @example `1678379917000`
             */
            GmtModified: string;
            /**
             * 提示信息
             * @example `成功`
             */
            Message: string;
            /**
             * 灵骏HUB ID
             * @example `er-p68b0jwn`
             */
            ErId: string;
            /**
             * 灵骏HUB地域信息
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID
             * @example `1620939556166277`
             */
            TenantId: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * 灵骏HUB实例名称
             * @example `er-1`
             */
            ErName: string;
            /**
             * 主可用区
             * @example `cn-wulanchabu-b`
             */
            MasterZoneId: string;
            /**
             * 描述
             * @example `描述`
             */
            Description: string;
            /**
             * 连接数
             * @example `2`
             */
            Connections: number;
            /**
             * 路由策略数量
             * @example `2`
             */
            RouteMaps: number;
        }[];
        /**
         * 阿里云路由信息列表
         */
        AliyunRouterInfo: {
            /**
             * 物理专线ID
             * @example `pc-0jlof4bphlsnxbdztkvad`
             */
            PcId: string;
            /**
             * 边界路由器实例ID
             * @example `vbr-2ze4i85p6vb9nwcan5xt0`
             */
            VbrId: string;
            /**
             * 阿里云侧互联IPv4地址
             * @example `169.254.248.30`
             */
            LocalGatewayIp: string;
            /**
             * 灵骏侧互联IPv4地址
             * @example `169.254.248.28`
             */
            PeerGatewayIp: string;
            /**
             * 掩码
             * @example `255.255.255.248`
             */
            Mask: string;
            /**
             * 边界路由器实例的VLAN ID
             * @example `1042`
             */
            VlanId: string;
        }[];
        /**
         * 灵骏网络路由信息列表
         */
        CisRouterInfo: {
            /**
             * 云上路由器实例ID
             * @example `ccr-1ms84am0`
             */
            CcrId: string;
            /**
             * 专线信息列表
             */
            CcInfos: {
                /**
                 * 专线ID
                 * @example `cc-73aeex5o`
                 */
                CcId: string;
                /**
                 * 专线的Vlan ID
                 * @example `Ethernet1042`
                 */
                VlanId: string;
                /**
                 * 灵骏侧互联IPv4地址
                 * @example `169.254.248.26`
                 */
                LocalGatewayIp: string;
                /**
                 * 灵骏侧互联IPv4地址
                 * @example `169.254.248.30
                `
                 */
                RemoteGatewayIp: string;
                /**
                 * 子网掩码
                 * @example `255.255.255.248`
                 */
                SubnetMask: string;
                /**
                 * 实例状态
                 * @example `Established`
                 */
                Status: string;
            }[];
        }[];
        /**
         * 资源组ID。
         * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm)。
         * @example `rg-aek2l4sq6l7unhi`
         */
        ResourceGroupId: string;
        /**
         * 标签信息。
         * 一次最多支持输入20个标签信息。
         */
        Tags: {
            /**
             * 资源的标签键。
             * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
             * 一次最多支持输入20个标签的标签键。
             * @example `tag-vcc`
             */
            TagKey: string;
            /**
             * 资源的标签值。
             * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
             * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
             * @example `vcc-group-1`
             */
            TagValue: string;
        }[];
        /**
         * 连接方式，可选值：
         * - **VPC**
         * - **CENTR**
         * @example `CENTR`
         */
        ConnectionType: string;
        /**
         * 云企业网所属账号
         * @example `1620939556166279`
         */
        CenOwnerId: string;
        /**
         * 边界路由器信息列表
         */
        VbrInfos: {
            /**
             * 边界路由器ID
             * @example `vbr-wz96agu9h3d50z****`
             */
            VbrId: string;
            /**
             * 云企业网ID
             * @example `cen-cx0qua8q6cm4z9****`
             */
            CenId: string;
            /**
             * 边界路由器状态。取值：
             *  - unconfirmed：等待他人确认。
             *  - active：正常。
             *  - terminating：终止接入中。
             *  - terminated：已终止接入。
             *  - recovering：恢复中。
             *  - deleting：删除中。
             *  - Available： 可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 创建时间
             * @example `1683250981000`
             */
            GmtCreate: string;
            /**
             * 修改时间
             * @example `1673578603000`
             */
            GmtModified: string;
            /**
             * BGP邻居信息列表
             */
            VbrBgpPeers: {
                /**
                 * BGP组ID
                 * @example `bgpg-2ze2sit2vakrkapvy****`
                 */
                BgpGroupId: string;
                /**
                 * BGP邻居ID
                 * @example `bgp-uf6heugif9enu48rj****`
                 */
                BgpPeerId: string;
                /**
                 * BGP邻居IP
                 * @example `169.254.****`
                 */
                PeerIpAddress: string;
                /**
                 * Peer AS号
                 * @example `98765****`
                 */
                PeerAsn: string;
                /**
                 * BGP邻居的状态。取值：
                 *  - Pending：待定。
                 *  - Available：可用。
                 *  - Modifying：修改中。
                 *  - Deleting：删除中。
                 *  - Deleted：已删除。
                 *  - Not Available：不可用。
                 * @example `Available`
                 */
                Status: string;
            }[];
        }[];
    };
}
