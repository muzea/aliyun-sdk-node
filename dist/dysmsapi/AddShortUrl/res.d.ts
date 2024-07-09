export interface AddShortUrlResponse {
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
         * 原始链接地址。
         * @example `https://www.****.com/product/sms`
         */
        SourceUrl: string;
        /**
         * 短链服务使用失效时间。
         * > **ExpireDate**值为整点时间。
         * @example `2021-09-19 00:00:00`
         */
        ExpireDate: string;
        /**
         * 生成的短链服务地址。
         * @example `http://****.cn/6y8uy7`
         */
        ShortUrl: string;
    };
}
