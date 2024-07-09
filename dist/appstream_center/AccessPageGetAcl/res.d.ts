export interface AccessPageGetAclResponse {
    /**
     * Id of the request
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 状态码：
     * - `200`：成功。
     * - `400`：出错。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `The parameter ProductType is invalid.`
     */
    Message: string;
    /**
     * 请求成功与否，成功返回为true，失败为false
     * @example `true`
     */
    Success: string;
    /**
     * 访问页配置数据
     */
    Data: {
        /**
         * 访问页超链接
         * @example `https://wuying.aliyun.com/native-solution/cloud-flow/view?id=a-075nu7bcqim2wvxli&token=8141B1A674D48ACB8E5D2D6CE53FDB2F3CF8710A5F8F78578D5254BC6F******`
         */
        AccessUrl: string;
        /**
         * Url过期时间
         * @example `2023-12-05 14:28:20`
         */
        UrlExpireTime: string;
        /**
         * 访问模式：自由访问或者邀请码验证
         * @example `FREE_ACCESS`
         */
        AccessMode: string;
        /**
         * Url有效时间
         * @example `2023-02-08T03:52Z`
         */
        EffectTime: number;
        /**
         * 有效时间单位的可选项
         * @example `hour`
         */
        Unit: string;
    }[];
}
