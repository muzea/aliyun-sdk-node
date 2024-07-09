export interface ListUserPublicKeysResponse {
    /**
     * 用户公钥列表。
     */
    PublicKeys: {
        /**
         * 公钥指纹。
         * @example `d8:7d:b6:27:70:2d:07:fb:c6:b6:66:0a:86:7b:0f:9a`
         */
        FingerPrint: string;
        /**
         * 公钥ID。
         * @example `1`
         */
        PublicKeyId: string;
        /**
         * 公钥名称。
         * @example `Keyname`
         */
        PublicKeyName: string;
        /**
         * 公钥所属用户的用户ID。
         * @example `1`
         */
        UserId: string;
        /**
         * 公钥备注信息。
         * @example `comment`
         */
        Comment: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 公钥总数。
     * @example `5`
     */
    TotalCount: number;
}
