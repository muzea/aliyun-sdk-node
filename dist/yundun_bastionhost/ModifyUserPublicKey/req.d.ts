export interface ModifyUserPublicKeyRequest {
    /**
     * 指定要修改用户公钥的堡垒机的实例id。
     * >您可以调用[describeinstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-nif23******`
     */
    "InstanceId": string;
    /**
     * 指定要修改用户公钥的堡垒机所在的区域id。
     * >区域id和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要修改的用户公钥id。
     * > 您可以调用[ListUserPublicKeys](~~477555~~)接口获取该参数。
     * @example `2`
     */
    "PublicKeyId": string;
    /**
     * 指定要修改的公钥名称。最多支持128字符。
     * @example `name`
     */
    "PublicKeyName"?: string;
    /**
     * 指定修改后的用户公钥。
     * > 使用Base64编码。
     * @example `c3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUhVcjY4UENFYWFzZjFYRVpNYTVsMlNBQytHV3FpeXVsRVpndkV4dmlPM28gcm9vdEA5NjBkMmNhOTcwYjU=`
     */
    "PublicKey"?: string;
    /**
     * 指定修改后的用户组备注信息。最多支持500字符。
     * @example `comment`
     */
    "Comment"?: string;
}
