export interface ModifySslVpnServerRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
    /**
     * VPN网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SSL-VPN服务端实例ID。
     * @example `vss-bp18q7hzj6largv4v****`
     */
    "SslVpnServerId": string;
    /**
     * SSL-VPN服务端的名称。
     * 长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 客户端IP地址池。
     * @example `10.30.30.0/24`
     */
    "ClientIpPool"?: string;
    /**
     * 本地客户端的网段。
     * @example `10.20.20.0/24`
     */
    "LocalSubnet"?: string;
    /**
     * SSL-VPN服务端所使用的协议，取值：
     * - **TCP**（默认值）：TCP协议。
     * - **UDP**：UDP协议。
     * @example `UDP`
     */
    "Proto"?: string;
    /**
     * SSL-VPN使用的加密算法，取值：
     * - **AES-128-CBC**（默认值）：AES-128-CBC算法。
     * - **AES-192-CBC**：AES-192-CBC算法。
     * - **AES-256-CBC**：AES-256-CBC算法。
     * - **none**：不使用加密算法。
     * @example `AES-128-CBC`
     */
    "Cipher"?: string;
    /**
     * SSL-VPN服务端所使用的端口。端口取值范围：**1**~**65535**。默认值：**1194**。
     * 不支持使用以下端口：**22**、**2222**、**22222**、**9000**、**9001**、**9002**、**7505**、**80**、**443**、**53**、**68**、**123**、**4510**、**4560**、**500**、**4500**。
     * @example `1194`
     */
    "Port"?: number;
    /**
     * 指定是否对通信进行压缩， 取值：
     * - **true**（默认值）：对通信进行压缩。
     * - **false**：对通信不进行压缩。
     * @example `true`
     */
    "Compress"?: boolean;
    /**
     * 是否开启双因子认证。如果您选择开启双因子认证功能，您还需要输入IDaaS EIAM实例ID和IDaaS应用ID。取值：
     * - **true**：开启。
     * - **false**：不开启。
     * >- 如果您是首次使用双因子认证功能，请先完成[授权](https://ram.console.aliyun.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22VPN%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunVpnAccessingIdaasRole%22%2C%22TemplateId%22%3A%22IdaasRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fvpc.console.aliyun.com%2Fsslvpn%2Fcn-shanghai%2Fvpn-servers%22%7D)后再创建SSL服务端。
     * >- IDaaS EIAM 1.0实例不再支持新购。如果您的阿里云账号下存在IDaaS EIAM 1.0实例，开启双因子认证功能后，依旧支持绑定IDaaS EIAM 1.0实例。如果您的阿里云账号下不存在IDaaS EIAM 1.0实例，开启双因子认证功能后，仅支持绑定IDaaS EIAM 2.0实例。
     * @example `false`
     */
    "EnableMultiFactorAuth"?: boolean;
    /**
     * IDaaS EIAM实例ID。
     * @example `idaas-cn-hangzhou-****`
     */
    "IDaaSInstanceId"?: string;
    /**
     * IDaaS EIAM实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "IDaaSRegionId"?: string;
    /**
     * IDaaS应用ID。
     * - 如果您绑定的是IDaaS EIAM 2.0实例，需输入IDaaS应用ID。
     * - 如果您绑定的是IDaaS EIAM 1.0实例，无需输入IDaaS应用ID。
     * @example `app_my6g4qmvnwxzj2f****`
     */
    "IDaaSApplicationId"?: string;
}
