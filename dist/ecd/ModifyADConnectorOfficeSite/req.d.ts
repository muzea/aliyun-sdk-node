export interface ModifyADConnectorOfficeSiteRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
    /**
     * 企业AD的域名。相同的域名只能注册一次。
     * @example `example.com`
     */
    "DomainName"?: string;
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
     * 办公网络名称。长度为2~255个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `test`
     */
    "OfficeSiteName"?: string;
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
     * @example `127.0.*.*`
     */
    "DnsAddress"?: string[];
    /**
     * 企业AD子域的DNS地址。目前仅支持设置一个。如果设置了`SubDomainName`，而未设置此参数，则默认为子域DNS和父域的一致。
     * @example `127.0.*.*`
     */
    "SubDomainDnsAddress"?: string[];
    /**
     * 域控主机名。
     * 必须符合Windows主机命名规范。
     * @example `beijing-ad01`
     */
    "AdHostname"?: string;
    /**
     * AD域的组织单元OU。您可以调用[ListUserAdOrganizationUnits](~~311259~~)获取。
     * @example `example.com/Domain Controllers`
     */
    "OUName"?: string;
    "BackupDns"?: string;
    "BackupDCHostname"?: string;
}
