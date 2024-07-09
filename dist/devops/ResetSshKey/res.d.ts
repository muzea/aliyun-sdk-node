export interface ResetSshKeyResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 企业公钥
     */
    sshKey: {
        /**
         * 企业公钥
         * @example `saaaaaaaaaaaaaaaa`
         */
        publicKey: string;
        /**
         * 企业公钥id
         * @example `1212`
         */
        id: number;
    };
}
