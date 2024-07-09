export interface CreateADConnectorDirectoryRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 输入企业AD的全限定域名（FQDN），同时带有主机名和域名。相同的域名只能注册一次。
     * @example `corp.example.com`
     */
    "DomainName": string;
    /**
     * 域管理员的用户名。最长支持64个英文字符。
     * @example `sAMAccountName`
     */
    "DomainUserName": string;
    /**
     * 域管理员的用户密码。最长支持64个英文字符。
     * @example `testPassword`
     */
    "DomainPassword": string;
    /**
     * 目录名称。长度为2~255个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。
     * @example `testDirectoryName`
     */
    "DirectoryName": string;
    /**
     * 是否为使用云电脑的用户赋予本地管理员权限。
     * @example `true`
     */
    "EnableAdminAccess"?: boolean;
    /**
     * 连接云电脑时允许使用的方式。
     * @example `Internet`
     */
    "DesktopAccessType"?: string;
    /**
     * 企业已有AD子域的全限定域名（FQDN），同时带有主机名和域名。
     * @example `child.example.com`
     */
    "SubDomainName"?: string;
    /**
     * 是否启用MFA认证。开启后，该目录下的所有AD用户登录云电脑时，输入正确密码后，还需输入虚拟MFA设备生成的动态验证码。
     * > 首次登录时，需绑定MFA设备。
     * @example `false`
     */
    "MfaEnabled"?: boolean;
    /**
     * 企业AD对应DNS的IP地址。目前仅支持设置一个。请确保该IP地址在所选的交换机网络下可以访问。
     * @example `127.0.**.**`
     */
    "DnsAddress": string[];
    /**
     * 交换机ID。目前仅支持设置一个。
     * @example `vsw-bp19ocz3erfx15uon****`
     */
    "VSwitchId": string[];
    /**
     * 企业已有AD子域的DNS地址。
     * 如果设置了`SubDomainName`，而未设置此参数，则认为子域DNS和父域一致。
     * @example `127.0.**.**`
     */
    "SubDomainDnsAddress"?: string[];
    /**
     * AD Connector规格。
     * @example `1`
     */
    "Specification"?: number;
}
