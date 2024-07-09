export interface SendSmsVerifyCodeResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 状态码的描述。
     * @example `成功 `
     */
    Message: string;
    /**
     * 请求结果数据。
     */
    Model: {
        /**
         * 验证码。
         * @example `42324`
         */
        VerifyCode: string;
        /**
         * 请求ID。
         * @example `API-reqelekrqkllkkewrlwrjlsdfsdf`
         */
        RequestId: string;
        /**
         * 外部流水号。
         * @example `1231231313`
         */
        OutId: string;
        /**
         * 业务ID。
         * @example `112231421412414124123^4`
         */
        BizId: string;
    };
    /**
     * 请求状态码。返回OK代表请求成功。其他错误码，请参见[返回码列表](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11174283.0.0.70c5616bkj38Wa)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求是否成功。
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
