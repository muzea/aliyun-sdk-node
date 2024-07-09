export interface ModifyADConnectorDirectoryRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目录ID。
     * @example `cn-hangzhou+dir-gx2x1dhsmu52rd****	`
     */
    "DirectoryId": string;
    /**
     * 域名称。长度为2~255个字符，格式为两段式域名，如：`example.com`。相同的域名只能注册一次。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域管理员的用户名。最长支持64个英文字符。
     * @example `sAMAccountName`
     */
    "DomainUserName"?: string;
    /**
     * 域管理员的用户密码。最长支持64个英文字符。
     * @example `testPassword`
     */
    "DomainPassword"?: string;
    /**
     * 目录名称。
     * @example `testDirectoryName	`
     */
    "DirectoryName"?: string;
    /**
     * 企业已有AD子域的域名称。
     * @example `child.example.com	`
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
     * @example `127.0.**.**	`
     */
    "DnsAddress"?: string[];
    /**
     * 企业已有AD子域的DNS地址。
     * 如果设置了`SubDomainName`，而未设置此参数，则认为子域DNS和父域一致。
     * @example `127.0.**.**	`
     */
    "SubDomainDnsAddress"?: string[];
    /**
     * 域控主机名。
     * 必须符合Windows主机命名规范。
     * @example `cnshsv21hmcdc01`
     */
    "AdHostname"?: string;
    /**
     * AD域的组织单元OU。您可以调用[ListUserAdOrganizationUnits](~~311259~~)获取。
     * @example `example.com/Domain Controllers`
     */
    "OUName"?: string;
}
