export interface UpdateCustomDomainRequest {
    /**
     * 域名。
     * @example `example.com	`
     */
    "domainName": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 域名支持的协议类型：
         * - **HTTP**：仅支持HTTP协议。
         * - **HTTPS**：仅支持HTTPS协议。
         * - **HTTP,HTTPS**：同时支持HTTP及HTTPS协议。
         * @example `HTTP`
         */
        protocol: string;
        /**
         * 路由表：自定义域名访问时的PATH到Function的映射。
         */
        routeConfig: any;
        /**
         * HTTPS证书的配置信息。
         */
        certConfig: any;
        /**
         * TLS配置信息。
         */
        tlsConfig: any;
        /**
         * Web应用防火墙配置信息。
         */
        wafConfig: any;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * API调用时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `asdf*****`
     */
    "X-Fc-Trace-Id"?: string;
}
