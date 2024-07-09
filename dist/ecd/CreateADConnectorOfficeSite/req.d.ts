export interface CreateADConnectorOfficeSiteRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络VPC包含的IPv4网段。系统将根据输入的IPv4网段，自动创建一个专有网络VPC。建议您使用以下网段及其子网作为IPv4网段：
     * - `10.0.0.0/12`（掩码有效范围为12\~24位）
     * - `172.16.0.0/12`（掩码有效范围为12\~24位）
     * - `192.168.0.0/16`（掩码有效范围为16\~24位）
     * @example `47.100.XX.XX`
     */
    "CidrBlock": string;
    /**
     * 云企业网实例所属的阿里云账号ID。
     * - 如果未配置CenId，或者配置的CenId属于本阿里云账号，该参数无需配置。
     * - 如果配置的CenId属于其他阿里云账号，请填写所属阿里云账号的ID。
     * @example `102681951715****`
     */
    "CenOwnerId"?: number;
    /**
     * 云企业网实例ID。
     * @example `cen-3gwy16dojz1m65****`
     */
    "CenId": string;
    /**
     * 验证码。如果配置的CenId属于其他阿里云账号，必须先调用[SendVerifyCode](~~436847~~)获取验证码。
     * @example `12****`
     */
    "VerifyCode"?: string;
    /**
     * 公网带宽峰值。取值范围：0~200。
     * 不设置该参数或者设置为0表示不开通互联网访问功能。
     * @example `1`
     */
    "Bandwidth"?: number;
    /**
     * 企业AD的域名。相同的域名只能注册一次。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 域管理员的用户名。最长支持64个英文字符。
     * > 用户名请使用sAMAccountName，不能使用userPrincipalName。
     * @example `Administrator`
     */
    "DomainUserName"?: string;
    /**
     * 域管理员的用户密码。最长支持64个英文字符。
     * @example `testPassword`
     */
    "DomainPassword"?: string;
    /**
     * 办公网络名称。长度为2~255个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空。
     * @example `test`
     */
    "OfficeSiteName"?: string;
    /**
     * 是否为使用云电脑的用户赋予本地管理员权限。
     * @example `true`
     */
    "EnableAdminAccess"?: boolean;
    /**
     * 连接云电脑时允许使用的接入方式。
     * > VPC连接方式依赖于阿里云私网连接PrivateLink服务，该服务不收取费用。该参数设置为`VPC`或者`Any`时，系统将自动为您开通私网连接服务。
     * @example `Internet`
     */
    "DesktopAccessType"?: string;
    /**
     * 是否开通公网访问功能。
     * @example `true`
     */
    "EnableInternetAccess"?: boolean;
    /**
     * 企业AD子域的域名。
     * @example `child.example.com`
     */
    "SubDomainName"?: string;
    /**
     * 是否开启多因素认证MFA。
     * @example `false`
     */
    "MfaEnabled"?: boolean;
    /**
     * 企业AD对应DNS的IP地址。目前仅支持设置一个。
     * @example `192.168.XX.XX`
     */
    "DnsAddress": string[];
    /**
     * 企业AD子域的DNS地址。如果设置了`SubDomainName`，而未设置此参数，则认为子域DNS和父域一致。
     * @example `192.168.XX.XX`
     */
    "SubDomainDnsAddress"?: string[];
    /**
     * AD Connector规格。
     * @example `1`
     */
    "Specification"?: number;
    /**
     * 域控主机名。
     * 必须符合Windows主机命名规范。
     * @example `beijing-ad01`
     */
    "AdHostname"?: string;
    /**
     * 协议类型。
     * @example `ASP`
     */
    "ProtocolType"?: string;
    "BackupDns"?: string;
    "BackupDCHostname"?: string;
}
