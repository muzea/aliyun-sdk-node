export interface CreateVpnAttachmentRequest {
    /**
     * IPsec连接所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPsec连接的名称。
     * 名称长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 用户网关ID。
     * @example `cgw-p0w2jemrcj5u61un8****`
     */
    "CustomerGatewayId": string;
    /**
     * IPsec连接的网络类型。取值：
     * - **public**（默认值）：公网，表示IPsec连接通过公网建立加密通信通道。
     * - **private**：私网，表示IPsec连接通过私网建立加密通信通道。
     * @example `public`
     */
    "NetworkType"?: string;
    /**
     * 需要和本地数据中心互通的VPC侧的网段，用于第二阶段协商。
     * 多个网段之间用半角逗号（,）分隔，例如：192.168.1.0/24,192.168.2.0/24。
     * 关于IPsec连接路由模式的说明：
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入为0.0.0.0/0，则表示您使用目的路由模式。
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入具体的网段，则表示您使用感兴趣流模式。
     * @example `10.1.1.0/24,10.1.2.0/24`
     */
    "LocalSubnet": string;
    /**
     * 需要和VPC互通的本地数据中心侧的网段，用于第二阶段协商。
     * 多个网段之间用半角逗号（,）分隔，例如：192.168.3.0/24,192.168.4.0/24。
     * 关于IPsec连接路由模式的说明：
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入为0.0.0.0/0，则表示您使用目的路由模式。
     * - 如果**LocalSubnet**和**RemoteSubnet**均输入具体的网段，则表示您使用感兴趣流模式。
     * @example `10.1.3.0/24,10.1.4.0/24`
     */
    "RemoteSubnet": string;
    /**
     * 选择IPsec连接的配置是否立即生效。 取值：
     * - **true**：是，配置完成后系统立即进行IPsec协议协商。
     * - **false**（默认值）：否，当有流量进入时系统才进行IPsec协议协商。
     * @example `false`
     */
    "EffectImmediately"?: boolean;
    /**
     * 第一阶段协商的配置信息：
     *
     * - **IkeConfig.Psk**：预共享密钥，用于VPN网关与本地数据中心之间的身份认证。
     *     - 密钥长度为1~100个字符，支持数字、大小写英文字母以及以下字符。```~!`@#$%^&*()_-+={}[]|;:',.<>/?```
     *     - 若您未指定预共享密钥，系统会随机生成一个16位的字符串作为预共享密钥。您可以调用[DescribeVpnConnection](~~2526951~~)接口查询系统自动生成的预共享密钥。
     *     > IPsec连接侧的预共享密钥需和本地数据中心侧的认证密钥一致，否则本地数据中心和VPN网关之间无法建立连接。
     * - **IkeConfig.IkeVersion**：IKE协议的版本。取值：**ikev1**或**ikev2**。默认值：**ikev1**。
     * - **IkeConfig.IkeMode**：协商模式。取值：**main**或**aggressive**。默认值：**main**。
     * - **IkeConfig.IkeEncAlg**：第一阶段协商的加密算法。取值：**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。
     * - **IkeConfig.IkeAuthAlg**：第一阶段协商的认证算法。取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。
     * - **IkeConfig.IkePfs**：第一阶段协商使用的Diffie-Hellman密钥交换算法。取值：**group1**、**group2**、**group5**或**group14**。默认值：**group2**。
     * - **IkeConfig.IkeLifetime**：第一阶段协商出的SA的生存周期。单位：秒。取值范围：**0**~**86400**。默认值：**86400**。
     * - **IkeConfig.LocalId**：IPsec连接阿里云侧的标识，长度限制为100个字符。默认值为空。
     * - **IkeConfig.RemoteId**：IPsec连接本地数据中心侧的标识，长度限制为100个字符，默认值为用户网关的IP地址。
     * @example `{"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}`
     */
    "IkeConfig"?: string;
    /**
     * 第二阶段协商的配置信息：
     * - **IpsecConfig.IpsecEncAlg**：第二阶段协商的加密算法。取值：**aes**、**aes192**、**aes256**、**des**或**3des**。默认值：**aes**。
     * - **IpsecConfig. IpsecAuthAlg**：第二阶段协商的认证算法。取值：**md5**、**sha1**、**sha256**、**sha384**、**sha512**。默认值：**md5**。
     * - **IpsecConfig. IpsecPfs**：第二阶段协商使用的Diffie-Hellman密钥交换算法。取值：**disabled**、**group1**、**group2**、**group5**或**group14**。默认值：**group2**。
     * - **IpsecConfig. IpsecLifetime**：第二阶段协商出的SA的生存周期。单位：秒。取值范围：**0**~**86400**。默认值：**86400**。
     * @example `{"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}`
     */
    "IpsecConfig"?: string;
    /**
     * BGP的配置信息：
     * - **BgpConfig.EnableBgp**：是否开启BGP功能。取值：**true**或**false**（默认值）。
     * - **BgpConfig.LocalAsn**：阿里云侧的自治系统号。自治系统号取值范围：**1**~**4294967295**。默认值：**45104**。
     *     支持按照两段位的格式进行输入，即：前16位比特.后16位比特。每个段位使用十进制输入。
     *     例如输入123.456，则表示自治系统号：123*65536+456=8061384。
     * - **BgpConfig.TunnelCidr**：IPsec隧道网段。该网段需是一个在169.254.0.0/16内的掩码长度为30的网段。
     * - **LocalBgpIp**：阿里云侧的BGP地址。该地址为IPsec隧道网段内的一个IP地址。
     * > - 在添加BGP配置前，建议您先了解BGP动态路由功能的工作机制和使用限制。更多信息，请参见[BGP动态路由公告
     * ](~~170235~~)。
     * > - 建议您使用自治系统号的私有号码与阿里云建立BGP连接。自治系统号的私有号码范围请自行查阅文档。
     * @example `{"EnableBgp":"true","LocalAsn":"45104","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}`
     */
    "BgpConfig"?: string;
    /**
     * 健康检查配置信息：
     * - **HealthCheckConfig.enable**：是否开启健康检查，取值：**true**或**false**（默认值）。
     * - **HealthCheckConfig.dip**：健康检查的目的IP地址。输入VPC侧通过IPsec连接可以访问的本地数据中心的IP地址。
     * - **HealthCheckConfig.sip**：健康检查的源IP地址。输入本地数据中心通过IPsec连接可以访问的VPC侧的IP地址。
     * - **HealthCheckConfig.interval**：健康检查的重试间隔时间，单位：秒。默认值：**3**。
     * - **HealthCheckConfig.retry**：健康检查的重试发包次数。默认值：**3**。
     * - **HealthCheckConfig.Policy**：健康检查失败时是否撤销已发布的路由。取值：
     *      - **revoke_route**（默认值）：撤销已发布的路由。
     *      - **reserve_route**：不撤销已发布的路由。
     * @example `{"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3","Policy": "revoke_route"}`
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
     * 是否开启DPD（对等体存活检测）功能。取值：
     * - **true**（默认值）：开启DPD功能。IPsec发起端会发送DPD报文用来检测对端的设备是否存活，如果在设定时间内未收到正确回应则认为对端已经断线，IPsec将删除ISAKMP SA和相应的IPsec SA，安全隧道同样也会被删除。
     * - **false**：不开启DPD功能，IPsec发起端不会发送DPD探测报文。
     * @example `true`
     */
    "EnableDpd"?: boolean;
    /**
     * 是否开启NAT穿越功能。取值：
     * - **true**（默认值）：开启NAT穿越功能。开启后，IKE协商过程会删除对UDP端口号的验证过程，同时实现对VPN隧道中NAT网关设备的发现功能。
     * - **false**：不开启NAT穿越功能。
     * @example `true`
     */
    "EnableNatTraversal"?: boolean;
    /**
     * 国密型VPN网关创建IPsec连接时，对端的CA证书。
     * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
     */
    "RemoteCaCert"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
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
     * IPsec连接所属的资源组ID。
     * - 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组ID。
     * - 如果您未指定资源组ID，IPsec连接创建后将归属于默认资源组。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
