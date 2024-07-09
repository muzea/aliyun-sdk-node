export interface ModifyHostAccountRequest {
    /**
     * 指定要修改的主机账户所在堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的主机账户所在堡垒机的区域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的主机账户ID。
     * > 您可以调用[ListHostAccounts](~~204372~~)接口获取该参数。
     * @example `1`
     */
    "HostAccountId": string;
    /**
     * 指定修改后的主机账户名称，最多支持128字符。
     * @example `abc`
     */
    "HostAccountName"?: string;
    /**
     * 指定修改后的主机账户密码。
     * @example `123456`
     */
    "Password"?: string;
    /**
     * 指定修改后的主机账户私钥，私钥为使用Base64编码后的字符串。
     * > 主机账户协议为SSH时，该参数生效。主机账户协议为RDP时，无需配置该参数。您可以调用[GetHostAccount](~~204391~~)接口查询主机账户使用的协议。支持同时为主机账户配置密码和私钥。在连接资产时，堡垒机会优先使用私钥进行连接。
     * @example `-----BEGIN RSA PRIVATE KEY-----
    ......
    -----END RSA PRIVATE KEY-----
    `
     */
    "PrivateKey"?: string;
    /**
     * 指定修改后的主机账户的私钥口令。
     * > 主机账户协议为SSH时，该参数生效。主机账户协议为RDP时，无需配置该参数。
     * @example `123456`
     */
    "PassPhrase"?: string;
    /**
     * 主机共享密钥ID。
     * > 此ID可通过调用[ListHostShareKeys](~~462973~~)接口获取。
     * @example `1`
     */
    "HostShareKeyId"?: string;
}
