export interface ModifyVpnAttachmentAttributeResponse {
    /**
     * IPsec连接ID。
     * @example `vco-p0w5112fgnl2ihlmf****`
     */
    VpnConnectionId: string;
    /**
     * IPsec连接绑定的用户网关ID。
     * @example `cgw-p0w2jemrcj5u61un8****`
     */
    CustomerGatewayId: string;
    /**
     * IPsec连接绑定的VPN网关实例ID。
     * @example `vpn-p0wa1c1018pmeb6cu****`
     */
    VpnGatewayId: string;
    /**
     * IPsec连接的名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * IPsec连接的描述信息。
     * @example `desctest`
     */
    Description: string;
    /**
     * 需要和本地数据中心互通的VPC侧的网段。
     * @example `10.1.1.0/24,10.1.2.0/24`
     */
    LocalSubnet: string;
    /**
     * 需要和VPC互通的本地数据中心侧的网段。
     * @example `10.1.3.0/24,10.1.4.0/24`
     */
    RemoteSubnet: string;
    /**
     * 第一阶段协商的配置信息。
     */
    IkeConfig: {
        /**
         * 预共享密钥，用于VPN网关与本地数据中心之间的身份认证。
         * > IPsec连接侧的预共享密钥需和本地数据中心侧的认证密钥一致，否则本地数据中心和VPN网关之间无法建立连接。
         * @example `1234***`
         */
        Psk: string;
        /**
         * IKE协议的版本。
         * @example `ikev1`
         */
        IkeVersion: string;
        /**
         * 协商模式。
         * @example `main`
         */
        IkeMode: string;
        /**
         * 第一阶段协商的加密算法。
         * @example `aes`
         */
        IkeEncAlg: string;
        /**
         * 第一阶段协商的认证算法。
         * @example `sha1`
         */
        IkeAuthAlg: string;
        /**
         * 第一阶段协商使用的Diffie-Hellman密钥交换算法。
         * @example `group2`
         */
        IkePfs: string;
        /**
         * 第一阶段协商出的SA的生存周期。单位：秒。
         * @example `86400`
         */
        IkeLifetime: number;
        /**
         * IPsec连接阿里云侧的标识。
         * @example `47.XX.XX.1`
         */
        LocalId: string;
        /**
         * IPsec连接本地数据中心侧的标识。
         * @example `47.XX.XX.2`
         */
        RemoteId: string;
    };
    /**
     * 第二阶段协商的配置信息。
     */
    IpsecConfig: {
        /**
         * 第二阶段协商的加密算法。
         * @example `aes`
         */
        IpsecEncAlg: string;
        /**
         * 第二阶段协商的认证算法。
         * @example `md5`
         */
        IpsecAuthAlg: string;
        /**
         * 第二阶段协商使用的Diffie-Hellman密钥交换算法。
         * @example `group2`
         */
        IpsecPfs: string;
        /**
         * 第二阶段协商出的SA的生存周期。单位：秒。
         * @example `86400`
         */
        IpsecLifetime: number;
    };
    /**
     * 创建IPsec连接的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建IPsec连接时的总时长。
     * @example `1658201810000`
     */
    CreateTime: number;
    /**
     * IPsec连接的配置是否立即生效。
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    EffectImmediately: boolean;
    /**
     * IPsec连接的状态。
     * - **ike_sa_not_established**：第一阶段协商失败。
     * - **ike_sa_established**：第一阶段协商成功。
     * - **ipsec_sa_not_established**：第二阶段协商失败。
     * - **ipsec_sa_established**：第二阶段协商成功。
     * @example `ike_sa_not_established`
     */
    Status: string;
    /**
     * IPsec连接的健康检查配置信息。
     */
    VcoHealthCheck: {
        /**
         * IPsec连接是否已开启健康检查功能。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        Enable: string;
        /**
         * 健康检查的源IP地址。
         * @example `10.1.1.1`
         */
        Sip: string;
        /**
         * 健康检查的目的IP地址。
         * @example `192.168.1.1`
         */
        Dip: string;
        /**
         * 健康检查的重试间隔时间。单位：秒。
         * @example `3`
         */
        Interval: number;
        /**
         * 健康检查的重试发包次数。
         * @example `3`
         */
        Retry: number;
        /**
         * 健康检查失败时是否撤销已发布的路由。
         * - **revoke_route**：撤销已发布的路由。
         * - **reserve_route**：不撤销已发布的路由。
         * @example `revoke_route`
         */
        Policy: string;
    };
    /**
     * IPsec连接是否已开启DPD功能。
     * - **true**：已开启。
     * - **false**：未开启。
     * @example `true`
     */
    EnableDpd: boolean;
    /**
     * IPsec连接是否已开启NAT穿越功能。
     * - **true**：已开启。
     * - **false**：未开启。
     * @example `true`
     */
    EnableNatTraversal: boolean;
    /**
     * IPsec连接的BGP配置信息。
     */
    VpnBgpConfig: {
        /**
         * IPsec连接是否已开启BGP功能。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        EnableBgp: string;
        /**
         * IPsec隧道网段。
         * @example `169.254.11.0/30`
         */
        TunnelCidr: string;
        /**
         * 阿里云侧的BGP IP地址。
         * @example `169.254.11.1`
         */
        LocalBgpIp: string;
        /**
         * 本地数据中心侧的BGP IP地址。
         * @example `169.254.11.2`
         */
        PeerBgpIp: string;
        /**
         * 阿里云侧的自治系统号。
         * @example `45104`
         */
        LocalAsn: number;
        /**
         * 本地数据中心侧的自治系统号。
         * @example `65535`
         */
        PeerAsn: number;
        /**
         * BGP的协商状态。
         * - **success**：正常。
         * - **false**：异常。
         * @example `false`
         */
        Status: string;
    };
    /**
     * IPsec连接绑定的资源类型。
     * - **CEN**：表示IPsec连接绑定了转发路由器实例。
     * - **VPNGW**：表示IPsec连接绑定了VPN网关实例。
     * - **NO_ASSOCIATED**：表示IPsec连接未绑定任何资源。
     * @example `CEN`
     */
    AttachType: string;
    /**
     * IPsec连接的网络类型。
     * - **public**：公网。
     * - **private**：私网。
     * @example `public`
     */
    NetworkType: string;
    /**
     * IPsec连接绑定的转发路由器实例所属的云企业网实例ID。
     * @example `cen-c2r3m3zxkumoqz****`
     */
    AttachInstanceId: string;
    /**
     * IPsec连接的带宽规格。
     * 返回值中**M**表示单位**Mbps**。
     * @example `1000M`
     */
    Spec: string;
    /**
     * IPsec连接所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
    /**
     * 请求ID。
     * @example `35822A84-867F-3936-A2E6-A4C4E3ED11C0`
     */
    RequestId: string;
}
