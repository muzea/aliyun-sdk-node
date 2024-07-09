export interface GetPreValidatePhoneIdResponse {
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
     * 错误描述信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 号码ID。
         * @example `861380000****`
         */
        PhoneNumberId: string;
        /**
         * 号码。
         * @example `92****`
         */
        PhoneNumber: string;
    };
}
