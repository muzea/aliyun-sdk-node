export interface CreateHostShareKeyRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要新增的主机共享密钥名称。最大长度128字符。
     * @example `name`
     */
    "HostShareKeyName": string;
    /**
     * 私钥（Base64编码后的字符串）。
     * > 支持输入使用ssh-keygen命令生成的RSA密钥和Ed25519密钥。
     * @example `LBYTnpR3Jmd2hMbmNBMGRmdWV2RW5oVXpCUmp3VkM0dGoKa0J2QlNRSHU2bytrMFBudlZvdlMzdGlBbXo5NkRzdUJDcDFFZVFJREFRQUJBb0lCQUNPZGNjK0lGUnNJd3VkYQpjT3VOSm5SK1BxWnlNZGVIaWFOcDc4SUxFd2NLZDNMZmlUWlYxc0d2Q21uTW0vQ3ZiS2NrZ0U1VjZxQVExRGZQCnI******`
     */
    "PrivateKey": string;
    /**
     * 私钥口令（Base64编码后的字符串）。
     * @example `MTIzN******`
     */
    "PassPhrase"?: string;
}
