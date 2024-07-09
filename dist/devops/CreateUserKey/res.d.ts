export interface CreateUserKeyResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorMessage: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * Key的主键ID
         * @example `11072`
         */
        id: number;
        /**
         * SSH密钥的标题
         * @example `My Title`
         */
        title: string;
        /**
         * SSH-Key的公钥串
         * @example `xxx`
         */
        publicKey: string;
        /**
         * 指纹信息
         * @example `xxx`
         */
        fingerPrint: string;
        /**
         * 作用范围，可选值：ALL、READ
         * - ALL：全部（读/写操作包括 clone/pull/push 等）
         * - READ：只读（仅支持 clone/pull ）
         * @example `ALL`
         */
        keyScope: string;
        /**
         * 创建时间
         * @example `2022-03-12 12:00:00`
         */
        createdAt: string;
        /**
         * 过期时间
         * @example `2022-03-12 12:00:00`
         */
        expireTime: string;
        /**
         * 上次使用时间
         * @example `2022-03-12 12:00:00`
         */
        lastUsedTime: string;
    };
}
