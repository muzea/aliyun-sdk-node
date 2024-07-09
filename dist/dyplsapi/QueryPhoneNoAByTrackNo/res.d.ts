export interface QueryPhoneNoAByTrackNoResponse {
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8906582E-6722`
     */
    RequestId: string;
    /**
     * 绑定成功后返回的结构体。
     */
    Module: {
        /**
         * X号码的分机号码。
         * @example `130`
         */
        Extension: string;
        /**
         * 隐私号码，即X号码。
         * @example `1710000****`
         */
        PhoneNoX: string;
        /**
         * A号码。
         * @example `1310000****`
         */
        PhoneNoA: string;
    }[];
}
