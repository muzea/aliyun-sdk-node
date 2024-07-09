export interface QueryShortUrlResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `819BE656-D2E0-4858-8B21-B2E477085AAF`
     */
    RequestId: string;
    /**
     * 短链详情。
     */
    Data: {
        /**
         * 短链使用的UV数据。
         * @example `23`
         */
        UniqueVisitorCount: string;
        /**
         * 原始链接地址。
         * @example `https://www.****.com/product/sms`
         */
        SourceUrl: string;
        /**
         * 短链状态。取值：
         * - **expired**：失效。
         * - **effective**：有效。
         * - **audit**：审核中。
         * - **reject**：审核拒绝。
         * @example `expired`
         */
        ShortUrlStatus: string;
        /**
         * 短链使用的PV数据。
         * @example `300`
         */
        PageViewCount: string;
        /**
         * 短链失效时间。
         * @example `2019-01-22 11:21:11`
         */
        ExpireDate: string;
        /**
         * 短链服务名称。
         * @example `阿里短链测试`
         */
        ShortUrlName: string;
        /**
         * 短链创建时间。
         * @example `2019-01-08 16:44:13`
         */
        CreateDate: string;
        /**
         * 生成的短链服务地址。
         * @example `http://****.cn/6y8uy7`
         */
        ShortUrl: string;
    };
}
