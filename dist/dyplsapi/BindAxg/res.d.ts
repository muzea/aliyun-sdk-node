export interface BindAxgResponse {
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
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
    /**
     * 绑定成功后返回的结构体。
     */
    SecretBindDTO: {
        /**
         * 分机号码。
         * > 接口BindAxg不涉及分机号码，请忽略该返回参数。
         * @example `130`
         */
        Extension: string;
        /**
         * 绑定关系ID。
         * @example `1************3`
         */
        SubsId: string;
        /**
         * 隐私号码，即X号码。
         * @example `139****1111`
         */
        SecretNo: string;
    };
}
