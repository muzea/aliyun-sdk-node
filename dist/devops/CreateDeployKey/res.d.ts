export interface CreateDeployKeyResponse {
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
     * @example `”“`
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
         * 部署密钥ID
         * @example `502385`
         */
        id: number;
        /**
         * 部署密钥标题
         * @example `测试密钥`
         */
        title: string;
        /**
         * 部署密钥
         * @example `""`
         */
        key: string;
        /**
         * 部署密钥指纹
         * @example `xx:xx:xx:xx`
         */
        fingerprint: string;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
    };
}
