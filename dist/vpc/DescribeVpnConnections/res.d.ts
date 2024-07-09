export interface DescribeVpnConnectionsResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `238752DC-0693-49BE-9C85-711D5691D3E5`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表的条目数。
     * @example `2`
     */
    TotalCount: number;
    VpnConnections: {
        /**
         * IPsec连接的配置信息列表。
         */
        VpnConnection: {
            /**
             * IPsec连接的状态。
             * - **ike_sa_not_established**：第一阶段协商失败。
             * - **ike_sa_established**：第一阶段协商成功。
             * - **ipsec_sa_not_established**：第二阶段协商失败。
             * - **ipsec_sa_established**：第二阶段协商成功。
             * @example `ipsec_sa_established`
             */
            Status: string;
            /**
             * IPsec连接是否已开启NAT穿越功能。
             * - **true**：开启NAT穿越功能。
             *    开启后，IKE协商过程会删除对UDP端口号的验证过程，同时实现对VPN隧道中NAT网关设备的发现功能。
             * - **false**：不开启NAT穿越功能。
             * @example `true`
             */
            EnableNatTraversal: boolean;
            /**
             * 对端的CA证书。
             * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
             */
            RemoteCaCertificate: string;
            /**
             * 创建IPsec连接的时间戳。单位：毫秒。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建IPsec连接时的总时长。
             * @example `1492753817000`
             */
            CreateTime: number;
            /**
             * IPsec连接的配置是否立即生效。
             * - **true**：是，配置变更完成后触发重连。
             * - **false**：否，有流量时触发重连。
             * @example `true`
             */
            EffectImmediately: boolean;
            /**
             * VPN网关的实例ID。
             * @example `vpn-bp1q8bgx4xnkm****`
             */
            VpnGatewayId: string;
            /**
             * IPsec连接阿里云侧的网段。
             * 在多个网段的情况下，网段之间使用半角逗号（,）分隔。
             * @example `192.168.0.0/16,172.17.0.0/16`
             */
            LocalSubnet: string;
            /**
             * IPsec连接的ID。
             * @example `vco-bp10lz7aejumd****`
             */
            VpnConnectionId: string;
            /**
             * 本地数据中心侧的网段。
             * 在多个网段的情况下，网段之间使用半角逗号（,）分隔。
             * @example `10.0.0.0/8,172.16.0.0/16`
             */
            RemoteSubnet: string;
            /**
             * IPsec连接关联的用户网关的实例ID。
             * @example `cgw-bp1mvj4g9kogw****`
             */
            CustomerGatewayId: string;
            /**
             * IPsec连接的名称。
             * @example `nametest`
             */
            Name: string;
            /**
             * IPsec连接是否已开启DPD（对等体存活检测）功能。
             * - **true**：开启DPD功能。
             *     IPsec发起端会发送DPD报文用来检测对端的设备是否存活，如果在设定时间内未收到正确回应则认为对端已经断线，IPsec将删除ISAKMP SA和相应的IPsec SA，安全隧道同样也会被删除。
             * - **false**：不开启DPD功能，IPsec发起端不会发送DPD探测报文。
             * @example `true`
             */
            EnableDpd: boolean;
            /**
             * 第一阶段协商的配置。
             */
            IkeConfig: {
                /**
                 * IPsec连接阿里云侧的标识。
                 * @example `139.17.XX.XX`
                 */
                RemoteId: string;
                /**
                 * IKE阶段生存时间。单位：秒。
                 * @example `86400`
                 */
                IkeLifetime: number;
                /**
                 * IKE阶段加密算法。
                 * @example `aes`
                 */
                IkeEncAlg: string;
                /**
                 * IPsec连接对端本地数据中心侧的标识。
                 * @example `116.64.XX.XX`
                 */
                LocalId: string;
                /**
                 * IKE阶段协商模式。
                 * - **main**：主模式，协商过程安全性高。
                 * - **aggressive**：野蛮模式，协商快速且协商成功率高。
                 * @example `main`
                 */
                IkeMode: string;
                /**
                 * IKE协议版本。
                 * - **ikev1**
                 * - **ikev2**
                 * 相对于IKEv1版本，IKEv2版本简化了SA的协商过程并且对于多网段的场景提供了更好的支持。
                 * @example `ikev1`
                 */
                IkeVersion: string;
                /**
                 * IKE阶段DH分组。
                 * @example `group2`
                 */
                IkePfs: string;
                /**
                 * 预共享密钥。
                 * @example `pgw6dy7****`
                 */
                Psk: string;
                /**
                 * IKE阶段认证算法。
                 * @example `sha1`
                 */
                IkeAuthAlg: string;
            };
            /**
             * 第二阶段协商的配置。
             */
            IpsecConfig: {
                /**
                 * IPsec阶段认证算法。
                 * @example `sha1`
                 */
                IpsecAuthAlg: string;
                /**
                 * IPsec阶段生存时间。单位：秒。
                 * @example `86400`
                 */
                IpsecLifetime: number;
                /**
                 * IPsec阶段加密算法。
                 * @example `aes`
                 */
                IpsecEncAlg: string;
                /**
                 * IPsec阶段DH分组。
                 * @example `group2`
                 */
                IpsecPfs: string;
            };
            /**
             * IPsec连接的健康检查配置。
             */
            VcoHealthCheck: {
                /**
                 * 健康检查状态。
                 * - **success**：正常。
                 * - **failed**：异常。
                 * @example `success`
                 */
                Status: string;
                /**
                 * 目的IP地址。
                 * @example `192.168.0.1`
                 */
                Dip: string;
                /**
                 * 健康检查的时间间隔。单位：秒。
                 * @example `2`
                 */
                Interval: number;
                /**
                 * 健康检查的重试发包次数。
                 * @example `3`
                 */
                Retry: number;
                /**
                 * 源IP地址。
                 * @example `192.168.0.50`
                 */
                Sip: string;
                /**
                 * 健康检查的开启状态。
                 * - **true**：已开启。
                 * - **false**：未开启。
                 * @example `true`
                 */
                Enable: string;
                /**
                 * 健康检查失败时是否撤销已发布的路由。
                 * - **revoke_route**：撤销路由。
                 * - **reserve_route**：不撤销路由。
                 * @example `revoke_route`
                 */
                Policy: string;
            };
            /**
             * IPsec连接BGP路由协议的配置。
             */
            VpnBgpConfig: {
                /**
                 * BGP路由协议的协商状态。
                 * - **success**：正常。
                 * - **false**：异常。
                 * @example `success`
                 */
                Status: string;
                /**
                 * 对端BGP地址。
                 * @example `169.254.10.1`
                 */
                PeerBgpIp: string;
                /**
                 * IPsec连接BGP网段。该网段是一个在169.254.0.0/16内的子网掩码长度为30的网段。
                 * @example `169.254.10.0/30`
                 */
                TunnelCidr: string;
                /**
                 * 阿里云侧BGP地址。
                 * @example `169.254.10.2`
                 */
                LocalBgpIp: string;
                /**
                 * 对端自治系统号。
                 * @example `65530`
                 */
                PeerAsn: number;
                /**
                 * 阿里云侧自治系统号。
                 * @example `65531`
                 */
                LocalAsn: number;
                /**
                 * BGP路由协议的认证密钥。
                 * @example `AuthKey****`
                 */
                AuthKey: string;
            };
            /**
             * IPsec连接绑定的资源类型。
             * - **CEN**：表示IPsec连接已绑定云企业网实例下的转发路由器实例。
             * - **NO_ASSOCIATED**：表示IPsec连接未绑定任何资源。
             * - **VPNGW**：表示IPsec连接绑定了VPN网关实例。
             * @example `CEN`
             */
            AttachType: string;
            /**
             * IPsec连接的网络类型。
             * - **public**：公网，表示IPsec连接通过公网建立加密通信通道。
             * - **private**：私网，表示IPsec连接通过私网建立加密通信通道。
             * @example `public`
             */
            NetworkType: string;
            /**
             * 转发路由器实例所属的云企业网实例ID。
             * @example `cen-lxxpbpalc776qz****`
             */
            AttachInstanceId: string;
            /**
             * IPsec连接的带宽规格。单位：**Mbps**。
             * @example `1000M`
             */
            Spec: string;
            /**
             * IPsec连接与转发路由器实例的绑定状态。
             * - **active**：IPsec连接已与VPN网关实例绑定，状态正常。
             * - **init**：IPsec连接未绑定任何资源，IPsec连接初始化。
             * - **attaching**：IPsec连接与转发路由器实例绑定中。
             * - **attached**：IPsec连接已与转发路由器实例绑定。
             * - **detaching**：IPsec连接与转发路由器实例解绑中。
             * - **financialLocked**：欠费锁定。
             * - **provisioning**：资源准备中。
             * - **updating**：更新中。
             * - **upgrading**：升级中。
             * - **deleted**：已删除。
             * @example `attached`
             */
            State: string;
            /**
             * IPsec连接绑定的转发路由器实例ID。
             * @example `tr-p0we2edef9qr44a85****`
             */
            TransitRouterId: string;
            /**
             * 转发路由器实例的名称。
             * @example `nametest`
             */
            TransitRouterName: string;
            /**
             * IPsec连接是否绑定了跨账号的转发路由器实例。
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            CrossAccountAuthorized: boolean;
            /**
             * IPsec连接的网关IP地址。
             * > 仅IPsec连接绑定转发路由器实例时会返回当前参数。
             * @example `10.XX.XX.10`
             */
            InternetIp: string;
            Tag: {
                /**
                 * IPsec连接绑定的标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `TagKey`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `TagValue`
                     */
                    Value: string;
                }[];
            };
            TunnelOptionsSpecification: {
                /**
                 * IPsec连接的隧道配置信息。
                 * 仅查询双隧道模式的IPsec连接会返回**TunnelOptionsSpecification**数组下的参数。
                 */
                TunnelOptions: {
                    /**
                     * 隧道ID。
                     * @example `tun-opsqc4d97wni27****`
                     */
                    TunnelId: string;
                    /**
                     * 隧道关联的用户网关ID。
                     * @example `cgw-p0wy363lucf1uyae8****`
                     */
                    CustomerGatewayId: string;
                    /**
                     * 隧道是否已开启DPD（对等体存活检测）功能。
                     * - **false**：未开启。
                     * - **true**：已开启。
                     * @example `true`
                     */
                    EnableDpd: string;
                    /**
                     * 隧道是否已开启NAT穿越功能。
                     * - **false**：未开启。
                     * - **true**：已开启。
                     * @example `true`
                     */
                    EnableNatTraversal: string;
                    /**
                     * 隧道的IP地址。
                     * @example `47.21.XX.XX`
                     */
                    InternetIp: string;
                    /**
                     * 隧道对端的CA证书。
                     * 仅VPN网关实例的类型为国密型时才会返回当前参数。
                     * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
                     */
                    RemoteCaCertificate: string;
                    /**
                     * 隧道的角色。
                     * - **master**：表示当前隧道为主隧道。
                     * - **slave**：表示当前隧道为备隧道。
                     * @example `master`
                     */
                    Role: string;
                    /**
                     * 隧道的状态。
                     * - **active**：状态正常。
                     * - **updating**：更新中。
                     * - **deleting**：删除中。
                     * @example `active`
                     */
                    State: string;
                    /**
                     * IPsec连接的状态。
                     * - **ike_sa_not_established**：第一阶段协商失败。
                     * - **ike_sa_established**：第一阶段协商成功。
                     * - **ipsec_sa_not_established**：第二阶段协商失败。
                     * - **ipsec_sa_established**：第二阶段协商成功。
                     * @example `ipsec_sa_established`
                     */
                    Status: string;
                    /**
                     * 隧道的BGP配置信息。
                     */
                    TunnelBgpConfig: {
                        /**
                         * BGP的协商状态。
                         * - **success**：正常。
                         * - **false**：异常。
                         * @example `success`
                         */
                        BgpStatus: string;
                        /**
                         * 隧道本端（阿里云侧）的自治系统号。
                         * @example `65530`
                         */
                        LocalAsn: string;
                        /**
                         * 隧道本端（阿里云侧）的BGP地址。
                         * @example `169.254.10.1`
                         */
                        LocalBgpIp: string;
                        /**
                         * 隧道对端的自治系统号。
                         * @example `65531`
                         */
                        PeerAsn: string;
                        /**
                         * 隧道对端的BGP地址。
                         * @example `169.254.10.2`
                         */
                        PeerBgpIp: string;
                        /**
                         * 隧道的BGP网段。
                         * @example `169.254.10.0/30`
                         */
                        TunnelCidr: string;
                    };
                    /**
                     * 第一阶段协商的配置。
                     */
                    TunnelIkeConfig: {
                        /**
                         * IKE阶段认证算法。
                         * @example `sha1`
                         */
                        IkeAuthAlg: string;
                        /**
                         * IKE阶段加密算法。
                         * @example `aes`
                         */
                        IkeEncAlg: string;
                        /**
                         * IKE阶段生存时间。单位：秒。
                         * @example `86400`
                         */
                        IkeLifetime: string;
                        /**
                         * IKE协商模式。
                         * - **main**：主模式，协商过程安全性高。
                         * - **aggressive**：野蛮模式，协商快速且协商成功率高。
                         * @example `main`
                         */
                        IkeMode: string;
                        /**
                         * IKE阶段DH分组。
                         * @example `group2`
                         */
                        IkePfs: string;
                        /**
                         * IKE协议版本。
                         * @example `ikev1`
                         */
                        IkeVersion: string;
                        /**
                         * 隧道本端（阿里云侧）的标识。
                         * @example `47.21.XX.XX`
                         */
                        LocalId: string;
                        /**
                         * 预共享密钥。
                         * @example `123456****`
                         */
                        Psk: string;
                        /**
                         * 隧道对端的标识。
                         * @example `47.42.XX.XX`
                         */
                        RemoteId: string;
                    };
                    /**
                     * 第二阶段协商的配置。
                     */
                    TunnelIpsecConfig: {
                        /**
                         * IPsec阶段认证算法。
                         * @example `sha1`
                         */
                        IpsecAuthAlg: string;
                        /**
                         * IPsec阶段加密算法。
                         * @example `aes`
                         */
                        IpsecEncAlg: string;
                        /**
                         * IPsec阶段生存时间。单位：秒。
                         * @example `86400`
                         */
                        IpsecLifetime: string;
                        /**
                         * IPsec阶段DH分组。
                         * @example `group2`
                         */
                        IpsecPfs: string;
                    };
                    /**
                     * 隧道部署的可用区。
                     * @example `ap-southeast-5a`
                     */
                    ZoneNo: string;
                }[];
            };
            /**
             * 隧道BGP的开启状态。
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `true`
             */
            EnableTunnelsBgp: boolean;
            /**
             * IPsec连接所属的资源组ID。
             * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
             * @example `rg-acfmzs372yg****`
             */
            ResourceGroupId: string;
        }[];
    };
}
