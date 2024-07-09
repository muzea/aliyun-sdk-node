export interface VerifyPhoneWithTokenResponse {
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
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
     * 结构体。
     */
    GateVerify: {
        /**
         * 认证结果。
         * - PASS：一致。
         * - REJECT：不一致。
         * - UNKNOWN：无法判断。
         * @example `PASS`
         */
        VerifyResult: string;
        /**
         * 流水号。
         * @example `12134****`
         */
        VerifyId: string;
    };
}
