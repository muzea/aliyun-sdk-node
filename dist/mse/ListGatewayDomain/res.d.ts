export interface ListGatewayDomainResponse {
    /**
     * 请求ID。
     * @example `3F5D8E93-CA66-57F1-8BCF-A223E11B6B91`
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
     * 返回码。
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
     * 节点数据。
     */
    Data: {
        /**
         * 域名ID。
         * @example `243`
         */
        Id: number;
        /**
         * 域名。
         * @example `test.com`
         */
        Name: string;
        /**
         * 协议。
         * @example `HTTP`
         */
        Protocol: string;
        /**
         * 是否强制HTTPS。
         * @example `true`
         */
        MustHttps: boolean;
        /**
         * 证书ID。
         * @example `3452-cn-hangzhou`
         */
        CertIdentifier: string;
        /**
         * 证书到期时间（已废弃，请进入域名详情页查看）。
         * @example ` 2031-03-30 02:35:12`
         */
        CertBeforeDate: string;
        /**
         * 网关ID。
         * @example `12`
         */
        GatewayId: number;
        /**
         * 域名记录创建时间。
         * @example ` 2031-03-30 02:35:12`
         */
        GmtCreate: string;
        /**
         * 域名记录更新时间。
         * @example ` 2031-03-30 02:35:12`
         */
        GmtModified: string;
        /**
         * 域名状态。
         * 枚举值
         * - 0未发布
         * - 2发布中
         * - 3已发布
         * - 4编辑中
         * - 5下线中
         * - 6不可用
         * @example `3`
         */
        Status: number;
        /**
         * 域名来源类型：
         * - Op：控制台创建
         * - Ingress：MSE Ingress创建
         * @example `Op`
         */
        Type: string;
        /**
         * 路由备注（ingress）
         */
        Comment: {
            /**
             * 状态
             * @example `Error`
             */
            Status: string;
        };
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
         * Tls最小版本.
         * @example `TLS 1.0`
         */
        TlsMin: string;
    }[];
}
