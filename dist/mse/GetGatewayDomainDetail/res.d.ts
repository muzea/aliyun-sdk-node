export interface GetGatewayDomainDetailResponse {
    /**
     * 请求ID。
     * @example `88B83302-CD88-54D3-8DF2-208BFDC73F0D`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 状态码。
     * @example `403`
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
     * 数据。
     */
    Data: {
        /**
         * ID。
         * @example `12`
         */
        Id: number;
        /**
         * 名称。
         * @example `test.com`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `1`
         */
        GatewayId: number;
        /**
         * 网关协议。
         * @example `HTTP`
         */
        Protocol: string;
        /**
         * 强制HTTPS
         * @example `true`
         */
        MustHttps: boolean;
        /**
         * 证书标识。
         * @example `234-cn-hangzhou`
         */
        CertIdentifier: string;
        /**
         * 创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
        /**
         * 证书名称。
         * @example `test`
         */
        CertName: string;
        /**
         * 公网域名。
         * @example `name`
         */
        CommonName: string;
        /**
         * 扩展字段名称。
         * @example `test.com`
         */
        Sans: string;
        /**
         * 到期时间
         * @example `2021-04-01 02:35:12`
         */
        BeforeDate: number;
        /**
         * 开始时间。
         * @example `2021-04-01 02:35:12`
         */
        AfterDate: number;
        /**
         * 算法。
         * @example `RSA`
         */
        Algorithm: string;
        /**
         * 签发者。
         * @example `Istio`
         */
        Issuer: string;
        /**
         * 到期时间。
         * @example `2021-04-01 02:35:12`
         */
        GmtBefore: string;
        /**
         * 开始时间。
         * @example `2021-04-01 02:35:12`
         */
        GmtAfter: string;
        /**
         * 是否开启`Http2`。
         * - `open`：开启`Http2`。
         * - `close`：关闭`Http2`。
         * - `globalConfig`：使用全局配置。
         * @example `close`
         */
        Http2: string;
        /**
         * Tls最大版本。
         * @example `TLS 1.3`
         */
        TlsMax: string;
        /**
         * Tls最小版本。
         * @example `TLS 1.0`
         */
        TlsMin: string;
    };
}
