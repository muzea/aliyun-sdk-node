export interface ListUserKeysResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `Openapi.RequestError`
     */
    errorMessage: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * SSH密钥的主键ID
         * @example `5240`
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
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 过期时间
         * @example `2022-03-18 14:24:54`
         */
        expireTime: string;
        /**
         * 上次使用时间
         * @example `2022-03-18 14:24:54`
         */
        lastUsedTime: string;
    }[];
}
