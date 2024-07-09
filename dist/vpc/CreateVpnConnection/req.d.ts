export interface CreateVpnConnectionRequest {
    /**
     * IPsec连接所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数，且该参数必填。
     * 用户网关的ID。
     * @example `cgw-p0w2jemrcj5u61un8****`
     */
    "CustomerGatewayId"?: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1q8bgx4xnkm****`
     */
    "VpnGatewayId": string;
    /**
     * IPsec连接的名称。
     * 长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `IPsec`
     */
    "Name"?: string;
    /**
     * 需要和本地数据中心互通的VPC侧的网段，用于第二阶段协商。
     * 多个网段之间用半角逗号（,）分隔，例如：192.168.1.0/24,192.168.2.0/24。
     * 关于IPsec连接路由模式的说明：
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入为0.0.0.0/0，则表示您使用目的路由模式。
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入具体的网段，则表示您使用感兴趣流模式。
     * @example `10.10.1.0/24,10.10.2.0/24`
     */
    "LocalSubnet": string;
    /**
     * 需要和VPC互通的本地数据中心侧的网段，用于第二阶段协商。
     * 多个网段之间用半角逗号（,）分隔，例如：192.168.3.0/24,192.168.4.0/24。
     * 关于IPsec连接路由模式的说明：
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入为0.0.0.0/0，则表示您使用目的路由模式。
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入具体的网段，则表示您使用感兴趣流模式。
     * @example `10.10.3.0/24,10.10.4.0/24`
     */
    "RemoteSubnet": string;
    /**
     * 选择IPsec连接的配置是否立即生效。取值：
     *
     * - **true**：是，配置完成后系统立即进行IPsec协议协商。
     *
     * - **false**（默认值）：否，当有流量进入时系统才进行IPsec协议协商。
     * @example `false`
     */
    "EffectImmediately"?: boolean;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * 第一阶段协商的配置信息：
     *
     * - **IkeConfig.Psk**：预共享密钥，用于VPN网关与本地数据中心之间的身份认证。
     *     - 密钥长度为1~100个字符，支持数字、大小写英文字母以及以下字符。```~!\`@#$%^&*()_-+={}[]|;:',.<>/?```
     *     - 若您未指定预共享密钥，系统会随机生成一个16位的字符串作为预共享密钥。您可以调用[DescribeVpnConnection](~~2526951~~)接口查询系统自动生成的预共享密钥。
     *         > IPsec连接侧的预共享密钥需和本地数据中心侧的认证密钥一致，否则本地数据中心和VPN网关之间无法建立连接。
     * - **IkeConfig.IkeVersion**：IKE协议的版本。取值：**ikev1**或**ikev2**。默认值：**ikev1**。
     *     相对于IKEv1版本，IKEv2版本简化了SA的协商过程并且对于多网段的场景提供了更好的支持。
     *    <props="china"><ph>如果VPN网关实例类型为国密型，则IKE版本仅支持**ikev1**。</ph></props>
     * - **IkeConfig.IkeMode**：IKE版本的协商模式。取值：**main**或**aggressive**。默认值：**main**。
     *     - **main**：主模式，协商过程安全性高。
     *     - **aggressive**：野蛮模式，协商快速且协商成功率高。
     *    <props="china"><ph>如果VPN网关实例类型为国密型，则协商模式仅支持**main**。</ph></props>
     * - **IkeConfig.IkeEncAlg**：第一阶段协商的加密算法。
     *    <props="intl"><ph>取值：**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。 </ph></props>
     *    <props="china">如果VPN网关实例类型为普通型，则取值为**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。</props>
     *    <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm4**（默认值）。</ph></props>
     * - **IkeConfig.IkeAuthAlg**：第一阶段协商的认证算法。
     *    <props="intl"><ph>取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
     *    <props="china"><ph>如果VPN网关实例类型为普通型，则取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
     *    <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm3**（默认值）。</ph></props>
     * - **IkeConfig.IkePfs**：第一阶段协商使用的Diffie-Hellman密钥交换算法。取值：**group1**、**group2**、**group5**、**group14**。默认值：**group2**。
     * - **IkeConfig.IkeLifetime**：第一阶段协商出的SA的生存周期。单位：秒。取值范围：**0**~**86400**。默认值：**86400**。
     * - **IkeConfig.LocalId**：VPN网关的标识，长度限制为100个字符，默认值为VPN网关的IP地址。
     * - **IkeConfig.RemoteId**：用户网关的标识，长度限制为100个字符，默认值为用户网关的IP地址。
     * @example `{"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}`
     */
    "IkeConfig"?: string;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * 第二阶段协商的配置信息：
     * - **IpsecConfig.IpsecEncAlg**：第二阶段协商的加密算法。
     *    <props="intl"><ph>取值：**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。 </ph></props>
     *    <props="china"><ph>如果VPN网关实例类型为普通型，则取值为**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。</ph></props>
     *    <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm4**（默认值）。</ph></props>
     * - **IpsecConfig. IpsecAuthAlg**：第二阶段协商的认证算法。
     *    <props="intl"><ph>取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
     *    <props="china"><ph>如果VPN网关实例类型为普通型，则取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
     *    <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm3**（默认值）。</ph></props>
     * - **IpsecConfig. IpsecPfs**：第二阶段协商使用的Diffie-Hellman密钥交换算法。取值：**disabled**、**group1**、**group2**、**group5**、**group14**。默认值：**group2**。
     * - **IpsecConfig. IpsecLifetime**：第二阶段协商出的SA的生存周期。单位：秒。取值范围：**0**~**86400**。默认值：**86400**。
     * @example `{"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}`
     */
    "IpsecConfig"?: string;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * 健康检查配置信息：
     * - **HealthCheckConfig.enable**：是否开启健康检查，取值：**true**或**false**（默认值）。
     * - **HealthCheckConfig.dip**：健康检查的目的IP地址。
     * - **HealthCheckConfig.sip**：健康检查的源IP地址。
     * - **HealthCheckConfig.interval**：健康检查的重试间隔时间，单位：秒。默认值：**3**。
     * - **HealthCheckConfig.retry**：健康检查的重试发包次数。默认值：**3**。
     * @example `{"enable":"true","dip":"192.168.10.1","sip":"10.10.1.1","interval":"3","retry":"3"}`
     */
    "HealthCheckConfig"?: string;
    /**
     * 是否自动配置路由。取值：
     * - **true**（默认值）：自动配置路由。
     * - **false**：不自动配置路由。
     * @example `true`
     */
    "AutoConfigRoute"?: boolean;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * 是否开启DPD（对等体存活检测）功能。取值：
     * - **true**（默认值）：开启DPD功能。IPsec发起端会发送DPD报文用来检测对端的设备是否存活，如果在设定时间内未收到正确回应则认为对端已经断线，IPsec将删除ISAKMP SA和相应的IPsec SA，安全隧道同样也会被删除。
     * - **false**：不开启DPD功能，IPsec发起端不会发送DPD探测报文。
     * @example `true`
     */
    "EnableDpd"?: boolean;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * 是否开启NAT穿越功能。取值：
     * - **true**（默认值）：开启NAT穿越功能。开启后，IKE协商过程会删除对UDP端口号的验证过程，同时实现对VPN隧道中NAT网关设备的发现功能。
     * - **false**：不开启NAT穿越功能。
     * @example `true`
     */
    "EnableNatTraversal"?: boolean;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * BGP的配置信息：
     * - **BgpConfig.EnableBgp**：是否开启BGP功能。取值：**true**或**false**（默认值）。
     * - **BgpConfig.LocalAsn**：阿里云侧的自治系统号。自治系统号取值范围：**1**~**4294967295**。默认值：**45104**。
     *
     *     支持按照两段位的格式进行输入，即：前16位比特.后16位比特。每个段位使用十进制输入。
     *
     *     例如输入123.456，则表示自治系统号：123*65536+456=8061384。
     * - **BgpConfig.TunnelCidr**：IPsec隧道网段。该网段需是一个在169.254.0.0/16内的掩码长度为30的网段。
     *     > 一个VPN网关实例下每个IPsec连接的IPsec隧道网段需保持唯一。
     * - **LocalBgpIp**：阿里云侧的BGP地址。该地址为IPsec隧道网段内的一个IP地址。
     * >- 在添加BGP配置前，建议您先了解BGP动态路由功能的工作机制和使用限制。更多信息，请参见[VPN网关支持BGP动态路由公告](~~170235~~)。
     * >- 建议您使用自治系统号的私有号码与阿里云建立BGP连接。自治系统号的私有号码范围请自行查阅文档。
     * @example `{"EnableBgp":"true","LocalAsn":"45104","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}`
     */
    "BgpConfig"?: string;
    /**
     * 创建单隧道模式的IPsec-VPN连接时支持配置该参数。
     * 如果当前VPN网关实例为国密型VPN网关，您需要配置对端的CA证书。
     * - 对于国密型VPN网关，创建IPsec连接时，此项必填。
     * - 对于普通型VPN网关，此项需要为空。
     * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
     */
    "RemoteCaCertificate"?: string;
    /**
     * IPsec连接待添加的标签列表。
     * 一次最多支持为IPsec连接添加20个标签。
     */
    "Tags"?: {
        /**
         * 标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一次最多支持输入20个标签键。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 标签值。
         * 标签值最多支持128个字符，可以为空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一个标签键对应一个标签值。一次最多支持输入20个标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
    /**
     * 配置隧道。
     * - 创建双隧道模式的IPsec-VPN连接时支持配置**TunnelOptionsSpecification**数组下的参数。
     * - 创建双隧道模式的IPsec-VPN连接时，您必须同时为IPsec-VPN连接添加主隧道和备隧道的配置。一个IPsec-VPN连接下仅支持添加主备两条隧道。
     */
    "TunnelOptionsSpecification"?: {
        /**
         * 隧道关联的用户网关ID。
         * >- 创建双隧道模式IPsec-VPN连接时本参数必填。
         * >- 创建双隧道模式的IPsec-VPN连接时支持配置**TunnelOptionsSpecification**数组下的参数。
         * >- 创建双隧道模式的IPsec-VPN连接时，您必须同时为IPsec-VPN连接添加主隧道和备隧道的配置。一个IPsec-VPN连接下仅支持添加主备两条隧道。
         * @example `cgw-p0wy363lucf1uyae8****`
         */
        CustomerGatewayId: string;
        /**
         * 是否为隧道开启DPD（对等体存活检测）功能。取值：
         * - **true**（默认值）：开启DPD功能。IPsec发起端会发送DPD报文用来检测对端的设备是否存活，如果在设定时间内未收到正确回应则认为对端已经断线，IPsec将删除ISAKMP SA和相应的IPsec SA，安全隧道同样也会被删除。
         * - **false**：不开启DPD功能，IPsec发起端不会发送DPD探测报文。
         * @example `true`
         */
        EnableDpd: boolean;
        /**
         * 是否为隧道开启NAT穿越功能。取值：
         * - **true**（默认值）：开启NAT穿越功能。开启后，IKE协商过程会删除对UDP端口号的验证过程，同时实现对隧道中NAT网关设备的发现功能。
         * - **false**：不开启NAT穿越功能。
         * @example `true`
         */
        EnableNatTraversal: boolean;
        /**
         * 如果当前VPN网关实例为国密型VPN网关，您需要为隧道配置对端的CA证书。
         * - 对于国密型VPN网关，此项必填。
         * - 对于普通型VPN网关，此项需要为空。
         * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
         */
        RemoteCaCertificate: string;
        /**
         * 隧道的角色。取值：
         * - **master**：表示当前隧道为主隧道。
         * - **slave**：表示当前隧道为备隧道。
         * @example `master`
         */
        Role: string;
        /**
         * 为隧道添加BGP配置。
         */
        TunnelBgpConfig: {
            /**
             * 隧道本端（阿里云侧）的自治系统号。自治系统号取值范围：**1**~**4294967295**。默认值：**45104**。
             * > - 当您为IPsec连接开启BGP功能后（即指定**EnableTunnelsBgp**参数的值为**true**）需要配置该参数。
             * >- 在添加BGP配置前，建议您先了解BGP动态路由功能的工作机制和使用限制。更多信息，请参见[VPN网关支持BGP动态路由公告](~~170235~~)。
             * >- 建议您使用自治系统号的私有号码与阿里云建立BGP连接。自治系统号的私有号码范围请自行查阅文档。
             * @example `65530`
             */
            LocalAsn: number;
            /**
             * 隧道本端（阿里云侧）的BGP地址。该地址为BGP网段内的一个IP地址。
             * @example `169.254.10.1`
             */
            LocalBgpIp: string;
            /**
             * 隧道的BGP网段。该网段需是一个在169.254.0.0/16内的掩码长度为30的网段。
             * >在一个VPN网关实例下，每个隧道的BGP网段需保持唯一。
             * @example `169.254.10.0/30`
             */
            TunnelCidr: string;
        };
        /**
         * 第一阶段协商的配置信息。
         */
        TunnelIkeConfig: {
            /**
             * 第一阶段协商的认证算法。
             * <props="intl"><ph>取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
             * <props="china"><ph>如果VPN网关实例类型为普通型，则取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
             * <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm3**（默认值）。</ph></props>
             * @example `md5`
             */
            IkeAuthAlg: string;
            /**
             * 第一阶段协商的加密算法。
             * <props="intl"><ph>取值：**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。 </ph></props>
             * <props="china"><ph>如果VPN网关实例类型为普通型，则取值为**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。</ph></props>
             * <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm4**（默认值）。</ph></props>
             * @example `aes`
             */
            IkeEncAlg: string;
            /**
             * 第一阶段协商出的SA的生存周期。单位：秒。
             * 取值范围：**0**~**86400**。默认值：**86400**。
             * @example `86400`
             */
            IkeLifetime: number;
            /**
             * IKE版本的协商模式。取值：**main**或**aggressive**。默认值：**main**。
             * - **main**：主模式，协商过程安全性高。
             * - **aggressive**：野蛮模式，协商快速且协商成功率高。
             * <props="china"><ph>如果VPN网关实例类型为国密型，则协商模式仅支持**main**。</ph></props>
             * @example `main`
             */
            IkeMode: string;
            /**
             * 第一阶段协商使用的Diffie-Hellman密钥交换算法。默认值：**group2**。
             * 取值：**group1**、**group2**、**group5**、**group14**。
             * @example `group2`
             */
            IkePfs: string;
            /**
             * IKE协议的版本。取值：**ikev1**或**ikev2**。默认值：**ikev1**。
             * 相对于IKEv1版本，IKEv2版本简化了SA的协商过程并且对于多网段的场景提供了更好的支持。
             *
             * <props="china"><ph>如果VPN网关实例类型为国密型，则IKE版本仅支持**ikev1**。</ph></props>
             * @example `ikev1`
             */
            IkeVersion: string;
            /**
             * 隧道本端（阿里云侧）的标识，用于第一阶段的协商。长度限制为100个字符。默认值为隧道的IP地址。
             * **LocalId**支持FQDN格式，如果您使用FQDN格式，协商模式建议选择为**aggressive**（野蛮模式）。
             * @example `47.21.XX.XX`
             */
            LocalId: string;
            /**
             * 预共享密钥，用于隧道与隧道对端之间的身份认证。
             * - 密钥长度为1~100个字符，支持数字、大小写英文字母以及以下字符。```~!\`@#$%^&*()_-+={}[]|;:',.<>/?```
             * - 若您未指定预共享密钥，系统会随机生成一个16位的字符串作为预共享密钥。您可以调用[DescribeVpnConnection](~~2526951~~)接口查询系统自动生成的预共享密钥。
             * > 隧道及隧道对端的预共享密钥需一致，否则系统无法正常建立隧道。
             * @example `123456****`
             */
            Psk: string;
            /**
             * 隧道对端的标识，用于第一阶段的协商。长度限制为100个字符。默认值为隧道关联的用户网关的IP地址。
             * **RemoteId**支持FQDN格式，如果您使用FQDN格式，协商模式建议选择为**aggressive**（野蛮模式）。
             * @example `47.42.XX.XX`
             */
            RemoteId: string;
        };
        /**
         * 第二阶段协商的配置信息。
         *
         */
        TunnelIpsecConfig: {
            /**
             * 第二阶段协商的认证算法。
             * <props="intl"><ph>取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
             * <props="china"><ph>如果VPN网关实例类型为普通型，则取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。</ph></props>
             * <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm3**（默认值）。</ph></props>
             * @example `md5`
             */
            IpsecAuthAlg: string;
            /**
             * 第二阶段协商的加密算法。
             * <props="intl"><ph>取值：**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。 </ph></props>
             * <props="china"><ph>如果VPN网关实例类型为普通型，则取值为**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。</ph></props>
             * <props="china"><ph>如果VPN网关实例类型为国密型，则取值为**sm4**（默认值）。</ph></props>
             * @example `aes`
             */
            IpsecEncAlg: string;
            /**
             * 第二阶段协商出的SA的生存周期。单位：秒。
             * 取值范围：**0**~**86400**。默认值：**86400**。
             * @example `86400`
             */
            IpsecLifetime: number;
            /**
             * 第二阶段协商使用的Diffie-Hellman密钥交换算法。默认值：**group2**。
             * 取值：**disabled**、**group1**、**group2**、**group5**、**group14**。
             * @example `group2`
             */
            IpsecPfs: string;
        };
    }[];
    /**
     * 创建双隧道模式的IPsec-VPN连接时支持配置该参数。
     * 是否为隧道开启BGP功能。取值：**true**或**false**（默认值）。
     * @example `true`
     */
    "EnableTunnelsBgp"?: boolean;
}
