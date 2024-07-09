export interface ListHostShareKeysResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的主机共享密钥的总数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 主机共享密钥的列表。
     */
    HostShareKeys: {
        /**
         * 关联主机账号的数量。
         * @example `1`
         */
        HostAccountCount: number;
        /**
         * 密钥上次修改的时间（秒，时间戳格式）。
         * @example `1644806406`
         */
        LastModifyKeyAt: number;
        /**
         * 主机共享密钥的名称。
         * @example `name`
         */
        HostShareKeyName: string;
        /**
         * 私钥的指纹。
         * @example `aa:10:f5:21:7f:8b:3e:86:b0:8b:f0:e0******`
         */
        PrivateKeyFingerPrint: string;
        /**
         * 共享密钥的ID。
         * @example `10247`
         */
        HostShareKeyId: string;
    }[];
}
