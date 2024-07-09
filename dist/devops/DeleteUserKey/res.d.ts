export interface DeleteUserKeyResponse {
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
         * SSH密钥的主键ID
         * @example `50998`
         */
        id: number;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-03-18 14:24:54`
         */
        updatedAt: string;
        /**
         * SSH密钥的标题
         * @example `密钥标题`
         */
        title: string;
        /**
         * 指纹信息
         * @example `xxx`
         */
        fingerPrint: string;
        /**
         * SHA1加密的公钥串加密信息
         * @example `xxx`
         */
        shaContext: string;
        /**
         * SSH-Key的公钥串
         * @example `xxx`
         */
        publicKey: string;
        /**
         * 公钥串的上下文信息
         * @example `xxx`
         */
        context: string;
        /**
         * 过期时间
         * @example `2022-03-18 14:24:54
        `
         */
        expireTime: string;
        /**
         * 上次使用时间
         * @example `2022-03-18 14:24:54
        `
         */
        lastUsedTime: string;
        /**
         * 作用范围，可选值：ALL、READ
         * - ALL：全部（读/写操作包括 clone/pull/push 等）
         * - READ：只读（仅支持 clone/pull ）
         * @example `ALL`
         */
        keyScope: string;
    };
}
