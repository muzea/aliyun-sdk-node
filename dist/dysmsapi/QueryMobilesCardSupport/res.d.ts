export interface QueryMobilesCardSupportResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `08C17DFE-2E10-54F4-BAFB-7180039CC217`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 查询值。
         */
        QueryResult: {
            /**
             * 查询的手机号码。
             * @example `1380000****`
             */
            Mobile: string;
            /**
             * 是否支持卡片短信。取值：
             * - **true**：支持。
             * - **false**：不支持。
             * @example `true`
             */
            Support: boolean;
        }[];
    };
}
