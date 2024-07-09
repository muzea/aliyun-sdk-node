export interface CreateUserPublicKeyRequest {
    /**
     * 指定需创建用户公钥的用户所在的堡垒机的区域id。
     * >区域id和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定新创建用户公钥的堡垒机实例id。
     * >您可以调用[listinstances](~~204522~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定新创建用户公钥的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
    /**
     * 用户公钥名称。
     * @example `用户公钥`
     */
    "PublicKeyName": string;
    /**
     * 用户公钥。采用Base64编码。
     * @example `c3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUxGQnQxUUpyT3IxK2hTTGRkbERMZUx4WGRIZ3hBalBxWHJIbWNFNWxqSk8gbm93Y29kZXJAbm93Y29kZXJkZU1hY0Jvb2stUHJvLmxvY2Fs`
     */
    "PublicKey": string;
    /**
     * 用户公钥的备注信息。最多支持500字符。
     * @example `comment`
     */
    "Comment"?: string;
}
