export interface ModifyVpnConnectionAttributeResponse {
    /**
     * IPsec连接是否已开启NAT穿越功能。取值：
     * - **false**：未开启。
     * - **true**：已开启。
     * 仅单隧道模式的IPsec-VPN连接会返回该参数。
     * @example `true`
     */
    EnableNatTraversal: boolean;
    /**
     * IPsec连接的创建时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建IPsec连接时的总时长。
     * @example `1492753817000`
     */
    CreateTime: number;
    /**
     * IPsec连接的配置是否立即生效。
     * - **true**：是，配置完成后系统立即进行IPsec协议协商。
     *
     * - **false**：否，当有流量进入时系统才进行IPsec协议协商。
     * @example `false`
     */
    EffectImmediately: boolean;
    /**
     * VPN网关实例的ID。
     * @example `vpn-bp1q8bgx4xnkm2ogj****`
     */
    VpnGatewayId: string;
    /**
     * VPC侧的网段。
     * @example `10.1.1.0/24,10.1.2.0/24`
     */
    LocalSubnet: string;
    /**
     * 请求ID。
     * @example `7DB79D0C-5F27-4AB5-995B-79BE55102F90`
     */
    RequestId: string;
    /**
     * IPsec连接的ID。
     * @example `vco-bp1bbi27hojx80nck****`
     */
    VpnConnectionId: string;
    /**
     * IPsec连接的描述信息。
     * @example `description`
     */
    Description: string;
    /**
     * 本地数据中心侧的网段。
     * @example `10.2.1.0/24,10.2.2.0/24`
     */
    RemoteSubnet: string;
    /**
     * IPsec连接关联的用户网关ID。
     * 仅单隧道模式的IPsec-VPN连接会返回该参数。
     * @example `cgw-p0w2jemrcj5u61un8****`
     */
    CustomerGatewayId: string;
    /**
     * IPsec连接的名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * IPsec连接是否已开启DPD（对等体存活检测）功能。
     * - **false**：未开启。
     * - **true**：已开启。
     * 仅单隧道模式的IPsec-VPN连接会返回该参数。
     * @example `true`
     */
    EnableDpd: boolean;
    /**
     * 第一阶段协商的配置。
     * 仅单隧道模式的IPsec-VPN连接会返回**IkeConfig**数组下的参数。
     */
    IkeConfig: {
        /**
         * 本地数据中心侧的标识。支持FQDN和IP格式，默认为当前选取的用户网关的IP地址。
         * @example `139.18.XX.XX`
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
         * VPC侧的标识。支持FQDN和IP格式，默认为当前选取的VPN网关的IP地址。
         * @example `116.64.XX.XX`
         */
        LocalId: string;
        /**
         * IKE协商模式。
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
         * @example `pgw6dy7d1i8i****`
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
     * 仅单隧道模式的IPsec-VPN连接会返回**IpsecConfig**数组下的参数。
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
     * 健康检查配置。
     * 仅单隧道模式的IPsec-VPN连接会返回**VcoHealthCheck**数组下的参数。
     */
    VcoHealthCheck: {
        /**
         * 目标IP。
         * @example `192.168.1.1`
         */
        Dip: string;
        /**
         * 健康检查的重试间隔时间，单位：秒。
         * @example `3`
         */
        Interval: number;
        /**
         * 健康检查的重试发包次数。
         * @example `3`
         */
        Retry: number;
        /**
         * 源IP。
         * @example `10.1.1.1`
         */
        Sip: string;
        /**
         * IPsec连接是否已开启健康检查功能。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        Enable: string;
    };
    /**
     * BGP配置信息。
     * 仅单隧道模式的IPsec-VPN连接会返回**VpnBgpConfig**数组下的参数。
     */
    VpnBgpConfig: {
        /**
         * BGP的协商状态。
         * - **success**：正常。
         * - **false**：异常。
         * @example `success`
         */
        Status: string;
        /**
         * 本地IDC侧的BGP地址。
         * @example `169.254.11.2`
         */
        PeerBgpIp: string;
        /**
         * IPsec连接的BGP网段。
         * @example `169.254.11.0/30`
         */
        TunnelCidr: string;
        /**
         * BGP的开启状态。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        EnableBgp: string;
        /**
         * 阿里云侧的BGP地址。
         * @example `169.254.11.1`
         */
        LocalBgpIp: string;
        /**
         * 本地数据中心侧的自治系统号。
         * @example `65531`
         */
        PeerAsn: number;
        /**
         * 阿里云侧的自治系统号。
         * @example `65530`
         */
        LocalAsn: number;
    };
    TunnelOptionsSpecification: {
        /**
         * IPsec连接的隧道配置信息。
         * 仅双隧道模式的IPsec-VPN连接会返回**TunnelOptionsSpecification**数组下的参数。
         */
        TunnelOptions: {
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
            EnableDpd: boolean;
            /**
             * 隧道是否已开启NAT穿越功能。
             * - **false**：未开启。
             * - **true**：已开启。
             * @example `true`
             */
            EnableNatTraversal: boolean;
            /**
             * 隧道阿里云侧网关IP地址。
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
             * 隧道的BGP配置信息。
             */
            TunnelBgpConfig: {
                /**
                 * 隧道本端（阿里云侧）的自治系统号。
                 * @example `65530`
                 */
                LocalAsn: number;
                /**
                 * 隧道本端（阿里云侧）的BGP地址。
                 * @example `169.254.10.1`
                 */
                LocalBgpIp: string;
                /**
                 * 隧道对端的自治系统号。
                 * @example `65531`
                 */
                PeerAsn: number;
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
             * 隧道ID。
             * @example `tun-opsqc4d97wni27****`
             */
            TunnelId: string;
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
                IkeLifetime: number;
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
                IpsecLifetime: number;
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
     * 仅双隧道模式的IPsec-VPN连接会返回该参数。
     * @example `true`
     */
    EnableTunnelsBgp: boolean;
    /**
     * IPsec连接所属的资源组ID。
     * IPsec连接与其关联的VPN网关实例的资源组相同。您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
}
