export interface CreateHostAccountRequest {
    /**
     * 指定要创建主机账户的主机所在堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要创建主机账户的主机所在堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要创建主机账户的主机ID。
     * > 可通过调用[ListHosts](~~200665~~)接口获取该参数。
     * @example `1`
     */
    "HostId": string;
    /**
     * 指定新建主机账户的协议名称。
     * <br>取值：
     * - SSH
     * - RDP
     * @example `SSH`
     */
    "ProtocolName": string;
    /**
     * 指定新建主机账户的名称，最长支持128字符。
     * @example `accountname`
     */
    "HostAccountName": string;
    /**
     * 指定新建主机账户的密码。
     * @example `123456`
     */
    "Password"?: string;
    /**
     * 指定新建主机账户的私钥，即使用Base64编码后的字符串。
     * > 主机账户协议ProtocolName为SSH时，该参数生效。ProtocolName为RDP时，无需配置该参数。支持同时为主机账户配置密码和私钥。在连接资产时，堡垒机会优先使用私钥进行连接。
     * @example `-----BEGIN RSA PRIVATE KEY-----
    ......
    -----END RSA PRIVATE KEY-----
    `
     */
    "PrivateKey"?: string;
    /**
     * 定新建主机账户的私钥口令。
     * > 主机账户协议ProtocolName为SSH时，您可以配置该参数。ProtocolName为RDP时，无需配置该参数。
     * @example `123456`
     */
    "PassPhrase"?: string;
    /**
     * 主机共享密钥ID。
     * @example `1`
     */
    "HostShareKeyId"?: string;
}
