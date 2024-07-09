export interface CheckSmsVerifyCodeResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 状态码的描述。
     * @example `成功`
     */
    Message: string;
    /**
     * 请求结果数据。
     */
    Model: {
        /**
         * 外部流水号。
         * @example `1212312`
         */
        OutId: string;
        /**
         * 认证结果。
         * - PASS：认证成功
         * - UNKNOWN：认证失败
         * @example `PASS`
         */
        VerifyResult: string;
    };
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[返回码](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11174283.0.0.70c5616bkj38Wa)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用成功。
     * - true：成功
     * - false：失败
     * @example `false`
     */
    Success: boolean;
}
