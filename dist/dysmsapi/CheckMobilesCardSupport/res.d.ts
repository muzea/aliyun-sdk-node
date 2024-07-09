export interface CheckMobilesCardSupportResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `819BE656-D2E0-4858-8B21-B2E477085AAF`
     */
    RequestId: string;
    /**
     * 是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 查询结果列表。
         */
        queryResult: {
            /**
             * 手机号码。
             * @example `1390000****`
             */
            mobile: string;
            /**
             * 是否支持卡片短信能力。
             * - **true**：支持卡片短信
             * - **false**：不支持卡片短信
             * @example `true`
             */
            support: boolean;
        }[];
    };
}
