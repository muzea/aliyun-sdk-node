export interface CreateSslVpnServerRequest {
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
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     *  VPN网关的ID。
     * @example `vpn-bp1hgim8by0kc9nga****`
     */
    "VpnGatewayId": string;
    /**
     * SSL-VPN服务端的名称。
     * 长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `sslvpnname`
     */
    "Name"?: string;
    /**
     * 客户端网段。
     * 是给客户端虚拟网卡分配访问地址的地址段，不是指客户端已有的内网网段。
     * 当客户端通过SSL-VPN连接访问本端时，VPN网关会从指定的客户端网段中分配一个IP地址给客户端使用，客户端将会使用分配的IP地址访问云上资源。
     * 在您指定客户端网段时需保证客户端网段所包含的IP地址个数是当前VPN网关SSL连接数的4倍及以上。
     * <details>
     * <summary>单击查看原因。</summary>
     * 例如您指定的客户端网段为192.168.0.0/24，系统在为客户端分配IP地址时，会先从192.168.0.0/24网段中划分出一个子网掩码为30的子网段，例如192.168.0.4/30，然后从192.168.0.4/30中分配一个IP地址供客户端使用，剩余三个IP地址会被系统占用以保证网络通信，此时一个客户端会耗费4个IP地址。因此，为保证您的客户端均能分配到IP地址，请确保您指定的客户端网段所包含的IP地址个数是VPN网关SSL连接数的4倍及以上。
     * </details>
     * <details>
     * <summary>单击查看不支持配置的网段。</summary>
     * - 100.64.0.0~100.127.255.255
     * - 127.0.0.0~127.255.255.255
     * - 169.254.0.0~169.254.255.255
     * - 224.0.0.0~239.255.255.255
     * - 255.0.0.0~255.255.255.255
     * </details>
     * <details>
     * <summary>单击查看每个SSL连接数建议的客户端网段。</summary>
     * - 若SSL连接数为5，则客户端网段的子网掩码位数建议小于或等于27。例如：10.0.0.0/27、10.0.0.0/26。
     * - 若SSL连接数为10，则客户端网段的子网掩码位数建议小于或等于26。例如：10.0.0.0/26、10.0.0.0/25。
     * - 若SSL连接数为20，则客户端网段的子网掩码位数建议小于或等于25。例如：10.0.0.0/25、10.0.0.0/24。
     * - 若SSL连接数为50，则客户端网段的子网掩码位数建议小于或等于24。例如：10.0.0.0/24、10.0.0.0/23。
     * - 若SSL连接数为100，则客户端网段的子网掩码位数建议小于或等于23。例如：10.0.0.0/23、10.0.0.0/22。
     * - 若SSL连接数为200，则客户端网段的子网掩码位数建议小于或等于22。例如：10.0.0.0/22、10.0.0.0/21。
     * - 若SSL连接数为500，则客户端网段的子网掩码位数建议小于或等于21。例如：10.0.0.0/21、10.0.0.0/20。
     * - 若SSL连接数为1000，则客户端网段的子网掩码位数建议小于或等于20。例如：10.0.0.0/20、10.0.0.0/19。
     * </details>
     * > - 客户端网段的子网掩码位数在16至29位之间。
     * > - 请确保客户端网段和本端网段不冲突。
     * > - 在指定客户端网段时，建议您使用10.0.0.0/8、172.16.0.0/12和192.168.0.0/16网段及其子网网段。如果您的客户端网段需要指定为公网网段，您需要将公网网段设置为VPC的用户网段，以确保VPC可以访问到该公网网段。关于用户网段的更多信息，请参见[专有网络FAQ](~~185311~~)。
     * > - 创建SSL服务端后，系统后台会自动将客户端网段的路由添加在VPC实例的路由表中（控制台默认不显示），请勿再手动将客户端网段的路由添加到VPC实例的路由表，否则会导致SSL-VPN连接流量传输异常。
     * @example `192.168.1.0/24`
     */
    "ClientIpPool": string;
    /**
     * 本端网段。
     * 是客户端通过SSL-VPN连接要访问的地址段。
     * 本端网段可以是VPC的网段、交换机的网段、通过专线和VPC互连的IDC的网段、云服务如对象存储服务OSS（Object Storage Service）等的网段。
     * 本端网段的子网掩码位数在8至32位之间。以下网段不支持指定为本端网段：
     * - 100.64.0.0~100.127.255.255
     * - 127.0.0.0~127.255.255.255
     * - 169.254.0.0~169.254.255.255
     * - 224.0.0.0~239.255.255.255
     * - 255.0.0.0~255.255.255.255
     * @example `10.0.0.0/8`
     */
    "LocalSubnet": string;
    /**
     * SSL-VPN服务端所使用的协议，取值：
     * - **TCP**（默认值）：TCP协议。
     * - **UDP**：UDP协议。
     * @example `UDP`
     */
    "Proto"?: string;
    /**
     * SSL-VPN连接使用的加密算法。
     * - 如果客户端使用Tunnelblick软件或2.4.0及以上版本的OpenVPN软件，则SSL服务端和客户端之间动态协商加密算法，会优先使用双方均支持的最高安全级别的加密算法。您为SSL服务端指定的加密算法不生效。
     * - 如果客户端使用2.4.0之前版本的OpenVPN软件，则SSL服务端和客户端将使用您为SSL服务端指定的加密算法。SSL服务端支持指定以下加密算法：
     *   - **AES-128-CBC**（默认值）：AES-128-CBC算法。
     *   - **AES-192-CBC**：AES-192-CBC算法。
     *   - **AES-256-CBC**：AES-256-CBC算法。
     *   - **none**：不使用加密算法。
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
     * - **true**：对通信进行压缩。
     * - **false**（默认值）：对通信不进行压缩。
     * @example `false`
     */
    "Compress"?: boolean;
    /**
     * 是否开启双因子认证。如果您选择开启双因子认证功能，您还需要配置`IDaaSInstanceId`、`IDaaSRegionId`和`IDaaSApplicationId`。取值：
     * - **true**：开启。
     * - **false**（默认值）：不开启。
     * >- 如果您是首次使用双因子认证功能，请先完成[授权](https://ram.console.aliyun.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22VPN%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunVpnAccessingIdaasRole%22%2C%22TemplateId%22%3A%22IdaasRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fvpc.console.aliyun.com%2Fsslvpn%2Fcn-shanghai%2Fvpn-servers%22%7D)后再创建SSL服务端。
     * >- IDaaS EIAM 1.0实例不再支持新购。如果您的阿里云账号下存在IDaaS EIAM 1.0实例，开启双因子认证功能后，依旧支持绑定IDaaS EIAM 1.0实例。如果您的阿里云账号下不存在IDaaS EIAM 1.0实例，开启双因子认证功能后，仅支持绑定IDaaS EIAM 2.0实例。
     * @example `false`
     */
    "EnableMultiFactorAuth"?: boolean;
    /**
     * IDaaS EIAM实例ID。
     * @example `idaas-cn-hangzhou-p****`
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
