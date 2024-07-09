export interface ModifyTunnelAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
    /**
     * 修改隧道的配置。
     */
    "TunnelOptionsSpecification"?: {
        /**
         * 是否开启DPD（对等体存活检测）功能。取值：
         * - **true**：开启DPD功能。隧道发起端会发送DPD报文用来检测对端的设备是否存活，如果在设定时间内未收到正确回应则认为对端已经断线，隧道将删除ISAKMP SA和相应的IPsec SA，隧道同样也会被删除。
         * - **false**：不开启DPD功能，隧道发起端不会发送DPD探测报文。
         * @example `true`
         */
        EnableDpd: boolean;
        /**
         * 是否开启NAT穿越功能。取值：
         * - **true**：开启NAT穿越功能。开启后，IKE协商过程会删除对UDP端口号的验证过程，同时实现对VPN隧道中NAT网关设备的发现功能。
         * - **false**：不开启NAT穿越功能。
         * @example `true`
         */
        EnableNatTraversal: boolean;
        /**
         * 在国密型VPN网关下使用IPsec连接时，对端的CA证书。
         * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
         */
        RemoteCaCertificate: string;
        /**
         * 修改隧道的BGP配置。
         * 如果隧道之前并未开启BGP功能，您需要调用[ModifyVpnConnectionAttribute](~~120381~~)接口为隧道开启BGP功能并添加BGP配置。
         */
        TunnelBgpConfig: {
            /**
             * 隧道本端自治系统号。自治系统号取值范围：**1**~**4294967295**。
             * @example `65530`
             */
            LocalAsn: number;
            /**
             * 隧道本端的BGP IP地址。该地址需是**TunnelCidr**内的一个IP地址。
             * @example `169.254.11.1`
             */
            LocalBgpIp: string;
            /**
             * 隧道本端BGP IP地址所属网段。
             * 该网段需是一个在169.254.0.0/16内的掩码长度为30的网段。
             * @example `169.254.11.0/30`
             */
            TunnelCidr: string;
        };
        /**
         * 修改隧道IKE阶段（第一阶段）配置。
         */
        TunnelIkeConfig: {
            /**
             * 第一阶段协商的认证算法。
             * - 如果IPsec关联的是普通型VPN网关，则取值为：**md5**、**sha1**、**sha256**、**sha384**或**sha512**。
             * - 如果IPsec关联的是国密型VPN网关，则取值为：**sm3**。
             * @example `sha1`
             */
            IkeAuthAlg: string;
            /**
             * 第一阶段协商的加密算法。
             * - 如果IPsec关联的是普通型VPN网关，则取值为：**aes**、**aes192**、**aes256**、**des**或**3des**。
             * - 如果IPsec关联的是国密型VPN网关，则取值为：**sm4**。
             * @example `aes`
             */
            IkeEncAlg: string;
            /**
             * 第一阶段协商出的SA的生存周期。单位：秒。取值范围：**0~86400**。
             * @example `86400`
             */
            IkeLifetime: number;
            /**
             * IKE版本的协商模式。取值：
             * - **main**：主模式，协商过程安全性高。
             * - **aggressive**：野蛮模式，协商快速且协商成功率高。
             * @example `main`
             */
            IkeMode: string;
            /**
             * 第一阶段协商使用的Diffie-Hellman密钥交换算法。取值：**group1**、**group2**、**group5**、**group14**。
             * @example `group2`
             */
            IkePfs: string;
            /**
             * IKE协议的版本。取值：**ikev1**或**ikev2**。
             * @example `ikev2`
             */
            IkeVersion: string;
            /**
             * 隧道本端的标识。长度限制为100个字符，支持FQDN和IP格式。默认值为隧道的IP地址。
             * @example `47.XX.XX.87`
             */
            LocalId: string;
            /**
             * 预共享密钥，用于隧道及对端之间的身份认证。
             *
             *    - 密钥长度为1~100个字符，支持数字、大小写英文字母以及以下字符。```~!`@#$%^&*()_-+={}[]|;:',.<>/?```
             *    - 若您未指定预共享密钥，系统会随机生成一个16位的字符串作为预共享密钥。您可以调用[DescribeVpnConnection](~~120374~~)接口查询系统自动生成的预共享密钥。
             *    > 隧道及隧道对端配置的预共享密钥必须一致，否则系统无法成功建立隧道。
             * @example `123456****`
             */
            Psk: string;
            /**
             * 隧道对端的标识。长度限制为100个字符，支持FQDN和IP格式。默认值为隧道关联的用户网关实例的IP地址。
             * @example `47.XX.XX.207`
             */
            RemoteId: string;
        };
        /**
         * 修改隧道IPsec阶段（第二阶段）的配置。
         */
        TunnelIpsecConfig: {
            /**
             * 第二阶段协商的认证算法。
             * - 如果IPsec关联的是普通型VPN网关，则取值为：**md5**、**sha1**、**sha256**、**sha384**或**sha512**。
             * - 如果IPsec关联的是国密型VPN网关，则取值为：**sm3**。
             * @example `sha1`
             */
            IpsecAuthAlg: string;
            /**
             * 第二阶段协商的加密算法。
             * - 如果IPsec关联的是普通型VPN网关，则取值为：**aes**、**aes192**、**aes256**、**des**或**3des**。
             * - 如果IPsec关联的是国密型VPN网关，则取值为：**sm4**。
             * @example `aes`
             */
            IpsecEncAlg: string;
            /**
             * 第二阶段协商出的SA的生存周期。单位：秒。取值范围：**0~86400**。
             * @example `86400`
             */
            IpsecLifetime: number;
            /**
             * 第二阶段协商使用的Diffie-Hellman密钥交换算法。取值：**disabled**、**group1**、**group2**、**group5**、**group14**。
             * @example `group2`
             */
            IpsecPfs: string;
        };
    };
    /**
     * IPsec连接所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * IPsec连接ID。
     * @example `vco-gw69vm1i71y354****`
     */
    "VpnConnectionId": string;
    /**
     * 隧道ID。
     * @example `tun-gbyz2e070xzo93****`
     */
    "TunnelId": string;
}
