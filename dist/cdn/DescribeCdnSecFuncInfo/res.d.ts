export interface DescribeCdnSecFuncInfoResponse {
    /**
     * 请求ID。
     * @example `BCD7D917-76F1-442F-BB75-C810DE34C761`
     */
    RequestId: string;
    /**
     * 描述。
     * @example `OK`
     */
    Description: string;
    /**
     * HTTP请求响应返回码。
     * - 0：OK。
     * - 非0：返回错误。
     * @example `0`
     */
    RetCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatus: string;
    /**
     * 查询到的数据。
     */
    Content: {
        /**
         * 标签。
         * @example `TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256`
         */
        Label: string;
        /**
         * 值。
         * @example `TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256`
         */
        Value: string;
    }[];
}
