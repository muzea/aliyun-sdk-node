export interface BuySecretNoResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~109196~~)。
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
     * @example `2D1AEB96-96D0-454E-B0DC-AE2A8DF08020`
     */
    RequestId: string;
    /**
     * 接口调用成功后返回的结构体。
     */
    SecretBuyInfoDTO: {
        /**
         * 隐私号码，即X号码。
         * @example `1390000****`
         */
        SecretNo: string;
    };
}
