export interface ListSSLCertResponse {
    /**
     * 请求ID。
     * @example `CAA9A229-141D-5FBA-AC5C-516C02026A11`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 状态码，200表示返回成功。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 证书ID。
         * @example `1234`
         */
        CertIdentifier: string;
        /**
         * 证书名称。
         * @example `test.com`
         */
        CertName: string;
        /**
         * 绑定域名。
         * @example `*.test.com`
         */
        CommonName: string;
        /**
         * SSL证书。
         * @example `SSL`
         */
        Sans: string;
        /**
         * 证书生效时间（Unix毫秒时间戳）。
         * @example `1694503184803`
         */
        BeforeDate: string;
        /**
         * 证书到期时间（Unix毫秒时间戳）。
         * @example `1726039184803`
         */
        AfterDate: string;
        /**
         * 算法。
         * @example `test`
         */
        Algorithm: string;
        /**
         * 颁发者。
         * @example `test`
         */
        Issuer: string;
        /**
         * 证书生效时间（GMT时间戳）。
         * @example `2023-09-12T07:19:44.803+0000`
         */
        GmtBefore: string;
        /**
         * 证书到期时间（GMT时间戳）。
         * @example `2024-09-11T07:19:44.803+0000`
         */
        GmtAfter: string;
    }[];
}
