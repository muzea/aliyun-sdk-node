export interface PhoneNumberEncryptResponse {
    /**
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 数组。
     */
    Data: {
        /**
         * 原始号码。
         * @example `1390000****`
         */
        OriginalNumber: string;
        /**
         * 加密后的号码。
         * @example `1400513****`
         */
        EncryptedNumber: string;
        /**
         * 号码过期时间。
         * @example `2022-05-27 16:05:23`
         */
        ExpireTime: string;
    }[];
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
}
