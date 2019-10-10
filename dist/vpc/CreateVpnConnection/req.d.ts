interface CreateVpnConnectionRequest {
    /**
    * IPsec连接所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  用户网关的ID。
    * @example `vpn-bp1q8bgx4xnk****`
    */ "CustomerGatewayId": string;
    /**
    * VPN网关的ID。
    * @example `vpn-bp1q8bgx4xnkm****`
    */ "VpnGatewayId": string;
    /**
    * 需要和本地IDC互连的VPC侧的网段，用于第二阶段协商。
    * 多个网段之间用逗号分隔，例如：192.168.1.0/24,192.168.2.0/24。
    * @example `1.1.1.0/24,1.1.2.0/24`
    */ "LocalSubnet": string;
    /**
    * 本地IDC的网段，用于第二阶段协商。
    * 多个网段之间用逗号分隔，例如：192.168.3.0/24,192.168.4.0/24。
    * @example `1.1.1.0/24,1.1.2.0/24`
    */ "RemoteSubnet": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-001****`
    */ "ClientToken"?: string;
    /**
    * IPsec连接的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或`https://`开头。
    * @example `IPsec`
    */ "Name"?: string;
    /**
    * 是否删除当前已协商成功的IPsec隧道并重新发起协商。取值：
    *
    * - **true**：配置完成后立即进行协商。
    *
    * - **false**（默认值）：当有流量进入时进行协商。
    * @example `false`
    */ "EffectImmediately"?: boolean;
    /**
    * 第一阶段协商的配置信息：
    *
    * - **IkeConfig.Psk**：用于IPsec VPN网关与用户网关之间的身份认证。默认情况下会随机生成，也可以手动指定密钥。长度限制为100个字符。
    * - **IkeConfig.IkeVersion**：IKE协议的版本。取值：**ikev1**|**ikev2**，默认值：**ikev1**。
    * - **IkeConfig.IkeMode**：IKE V1版本的协商模式。取值：**main**|**aggressive**，默认值：**main**。
    * - **IkeConfig.IkeEncAlg**：第一阶段协商的加密算法，取值：**aes**|**aes192**|**aes256**|**des**|**3des**，默认值：**aes**。
    * - **IkeConfig.IkeAuthAlg**：第一阶段协商的认证算法，取值：**md5**|**sha1**，默认值：**md5**。
    * - **IkeConfig.IkePfs**：第一阶段协商使用的Diffie-Hellman密钥交换算法，取值：**group1**|**group2**|**group5**|**group14**|**group24**，默认值：**group2**。
    * - **IkeConfig.IkeLifetime**：第一阶段协商出的SA的生存周期。取值范围为**0-86400**，单位为秒，默认值：**86400**。
    * - **IkeConfig.LocalIdIPsec**：VPN网关的标识，长度限制为100个字符，默认值为VPN网关的公网IP地址。
    * - **IkeConfig.RemoteId**：用户网关的标识，长度限制为100个字符，默认值为用户网关的公网IP地址。
    * @example ` ikev1`
    */ "IkeConfig"?: string;
    /**
    * 第二阶段协商的配置信息：
    * - **IpsecConfig.IpsecEncAlg**：第二阶段协商的加密算法，取值：**aes**|**aes192**|**aes256**|**des**|**3des**，默认值：**aes**。
    * - **IpsecConfig. IpsecAuthAlg**：第二阶段协商的认证算法，取值：**md5**|**sha1**，默认值：**md5**。
    * - **IpsecConfig. IpsecPfs**：转发所有协议的报文。第一阶段协商使用的Diffie-Hellman密钥交换算法，取值：**group1**|**group2**|**group5**|**group14**|**group24**，默认值：**group2**。
    * - **IpsecConfig. IpsecLifetime**：第二阶段协商出的SA的生存周期。取值范围为**0-86400**，单位为秒，默认值：**86400**。
    * @example `aes`
    */ "IpsecConfig"?: string;
    /**
    * 是否开启健康检查配置。
    * @example `Enable`
    */ "HealthCheckConfig"?: string;
    /**
    * @example `true`
    */ "AutoConfigRoute"?: boolean;
}
export { CreateVpnConnectionRequest };