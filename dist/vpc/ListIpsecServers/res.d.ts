export interface ListIpsecServersResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B457`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 分页大小。
     * @example `1`
     */
    MaxResults: number;
    /**
     * IPsec服务端信息列表。
     */
    IpsecServers: {
        /**
         * IPsec服务端创建时间。
         * T表示分隔符，Z表示的是UTC，即世界标准时间。
         * @example `2018-12-03T10:11:55Z`
         */
        CreationTime: string;
        /**
         * 已经连接IPsec服务端的客户端数量。
         * @example `1`
         */
        OnlineClientCount: number;
        /**
         * VPN网关公网IP地址。
         * @example `47.22.XX.XX`
         */
        InternetIp: string;
        /**
         * IPsec服务端名称。
         * @example `test`
         */
        IpsecServerName: string;
        /**
         * IDaaS实例ID。
         * @example `idaas-cn-hangzhou-****`
         */
        IDaaSInstanceId: string;
        /**
         * 是否删除当前已协商成功的IPsec隧道并重新发起协商。
         * - **true**：配置完成后立即进行协商。
         * - **false**：当有流量进入时进行协商。
         * @example `false`
         */
        EffectImmediately: boolean;
        /**
         * VPN网关的ID。
         * @example `vpn-bp1q8bgx4xnkm2ogj****`
         */
        VpnGatewayId: string;
        /**
         * 本端网段，指需要和客户端网段互连的VPC侧的网段。
         * @example `192.168.0.0/16,172.17.0.0/16`
         */
        LocalSubnet: string;
        /**
         * 预共享密钥。
         * @example `pgw6dy7d****`
         */
        Psk: string;
        /**
         * IPsec服务端所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 是否开启预共享密钥认证方式。仅取值为**true**，表示开启预共享密钥认证方式。
         * @example `true`
         */
        PskEnabled: boolean;
        /**
         * IPsec服务端ID。
         * @example `iss-bp1bo3xuvcxo7ixll****`
         */
        IpsecServerId: string;
        /**
         * 是否已开启双因子认证功能。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        MultiFactorAuthEnabled: boolean;
        /**
         * VPN网关的SSL连接数规格。
         * > SSL-VPN与IPsec服务端共享SSL连接数。例如，SSL连接数为5，您已经有3个SSL客户端连接了SSL-VPN，则您还能使用2个客户端连接IPsec服务端。
         * @example `5`
         */
        MaxConnections: number;
        /**
         * 客户端网段，指给客户端虚拟网卡分配访问地址的地址段。
         * @example `10.0.0.0/24`
         */
        ClientIpPool: string;
        /**
         * 第一阶段协商的配置。
         */
        IkeConfig: {
            /**
             * 对端标识符。支持FQDN和IP地址格式，默认为空。
             * @example `139.67.XX.XX`
             */
            RemoteId: string;
            /**
             * IKE生存时间。单位：秒。
             * @example `86400`
             */
            IkeLifetime: number;
            /**
             * IKE加密算法。
             * @example `aes`
             */
            IkeEncAlg: string;
            /**
             * IPsec服务端标识符。支持FQDN和IP地址格式，默认为当前选取的VPN网关公网IP地址。
             * @example `116.64.XX.XX`
             */
            LocalId: string;
            /**
             * IKE版本协商模式。取值：
             * **main**：主模式，协商过程安全性高。
             * @example `main`
             */
            IkeMode: string;
            /**
             * IKE版本。
             * @example `ikev2`
             */
            IkeVersion: string;
            /**
             * Diffie-Hellman密钥交换算法。
             * @example `group2`
             */
            IkePfs: string;
            /**
             * IKE认证算法。
             * @example `sha1`
             */
            IkeAuthAlg: string;
        };
        /**
         * 第二阶段协商的配置。
         */
        IpsecConfig: {
            /**
             * IPsec认证算法。
             * @example `sha1`
             */
            IpsecAuthAlg: string;
            /**
             * IPsec生存时间。单位：秒。
             * @example `86400`
             */
            IpsecLifetime: number;
            /**
             * IPsec加密算法。
             * @example `aes`
             */
            IpsecEncAlg: string;
            /**
             * Diffie-Hellman密钥交换算法。
             * @example `group2`
             */
            IpsecPfs: string;
        };
        /**
         * IPsec服务端所属的资源组ID。
         * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
         * @example `rg-acfmzs372yg****`
         */
        ResourceGroupId: string;
    }[];
}
