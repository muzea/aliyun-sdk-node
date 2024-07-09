export interface GetHostShareKeyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 共享密钥的详情。
     */
    HostShareKey: {
        /**
         * 主机共享密钥ID。
         * @example `10427`
         */
        HostShareKeyId: string;
        /**
         * 主机共享密钥的名称。
         * @example `name`
         */
        HostShareKeyName: string;
        /**
         * 主机共享密钥上次修改的时间（秒，时间戳格式）。
         * @example `1644287246`
         */
        LastModifyKeyAt: number;
        /**
         * 私钥的指纹。
         * @example `aa:10:f5:21:7f:8b:3e:86:b0:8b:f0:******`
         */
        PrivateKeyFingerPrint: string;
    };
}
