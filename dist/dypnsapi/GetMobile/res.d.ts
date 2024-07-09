export interface GetMobileResponse {
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
    GetMobileResultDTO: {
        /**
         * 手机号。
         * @example `13900001234`
         */
        Mobile: string;
    };
}
