export interface CreateIpsecServerRequest {
    /**
     * VPN网关所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp17lofy9fd0dnvzv****`
     */
    "VpnGatewayId": string;
    /**
     * 本端网段，指需要和客户端网段互连的VPC侧的网段。
     * 多个网段之间用半角逗号（,）分隔，例如：192.168.1.0/24,192.168.2.0/24。
     * @example `192.168.0.0/24`
     */
    "LocalSubnet": string;
    /**
     * 客户端网段，指给客户端虚拟网卡分配访问地址的地址段。
     * > 客户端网段不能和VPC侧网段冲突。
     * @example `10.0.0.0/24`
     */
    "ClientIpPool": string;
    /**
     * IPsec服务端名称。
     * 名称长度为1～100个字符。
     * @example `test`
     */
    "IpSecServerName"?: string;
    /**
     * 配置是否立即生效。取值：
     * - **true**：配置完成后立即进行协商。
     * - **false**（默认值）：当有流量进入时进行协商。
     * @example `true`
     */
    "EffectImmediately"?: boolean;
    /**
     * 第一阶段协商参数配置。取值：
     * - **IkeVersion**：IKE协议的版本。取值：**ikev1**或**ikev2**，默认值：**ikev2**。
     * - **IkeMode**：IKE版本的协商模式。默认值：**main**。
     * - **IkeEncAlg**：第一阶段协商的加密算法。默认值：**aes**。
     * - **IkeAuthAlg**：第一阶段协商的认证算法。默认值：**sha1**。
     * - **IkePfs**：第一阶段协商使用的Diffie-Hellman密钥交换算法。默认值：**group2**。
     * - **IkeLifetime**：第一阶段协商出的SA的生存周期。单位：秒，取值范围：**0**~**86400**，默认值：**86400**。
     * - **LocalId**：IPsec服务端标识。支持FQDN和IP地址格式，默认值为VPN网关公网IP地址。
     * - **RemoteId**：对端标识。支持FQDN和IP地址格式，默认值为空。
     * @example `{"IkeVersion":"ikev2","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400}`
     */
    "IkeConfig"?: string;
    /**
     * 第二阶段协商参数配置。取值：
     * - **IpsecEncAlg**：第二阶段协商的加密算法。默认值：**aes**。
     * - **IpsecAuthAlg**：第二阶段协商的认证算法。默认值：**sha1**。
     * - **IpsecPfs**：转发所有协议的报文。第二阶段协商使用的Diffie-Hellman密钥交换算法。默认值：**group2**。
     * - **IpsecLifetime**：第二阶段协商出的SA的生存周期。单位：秒，取值范围：**0**~**86400**，默认值：**86400**。
     * @example `{"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}`
     */
    "IpsecConfig"?: string;
    /**
     * 是否开启预共享密钥认证方式。取值：**true**，表示开启预共享密钥认证方式。
     * > 本参数必填。
     * @example `true`
     */
    "PskEnabled"?: boolean;
    /**
     * 预共享密钥。
     * 用于IPsec服务端与客户端之间的身份认证。密钥长度为1~100个字符。
     * 若您未指定预共享密钥，系统会随机生成一个16位的字符串作为预共享密钥。您可以调用[ListIpsecServers](~~2794120~~)接口查询系统生成的密钥信息。
     * > IPsec服务端的预共享密钥需和客户端的认证密钥一致，否则IPsec服务端和客户端之间无法建立连接。
     * @example `Cfd123****`
     */
    "Psk"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `d7d24a21-f4ba-4454-9173-b38****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：只预检此次请求，不会创建IPsec服务端。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误信息。如果检查通过，则返回`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建IPsec服务端。
     * @example `false`
     */
    "DryRun"?: string;
}
