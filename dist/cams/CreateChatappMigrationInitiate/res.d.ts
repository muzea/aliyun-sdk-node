export interface CreateChatappMigrationInitiateResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 手机号码。
         * @example `861390000****`
         */
        PhoneNumber: string;
        /**
         * 号码ID。
         * @example `8282889****`
         */
        Id: string;
        /**
         * 号码状态。
         * 取值：MIGRATING：迁移中。
         * @example `MIGRATING`
         */
        Status: string;
    };
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
