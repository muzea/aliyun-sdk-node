export interface ListCustomDomainsResponse {
    /**
     * 当符合查询条件的数据未读取完时，服务端会返回nextToken，此时可以使用nextToken继续读取后面的数据。第一次查询不需要提供这个参数。
     * @example `example.com`
     */
    nextToken: string;
    /**
     * 符合列举条件的域名列表。
     */
    customDomains: {
        /**
         * 域名。
         * @example `example.com	`
         */
        domainName: string;
        /**
         * 您的阿里云账号（主账号）ID。
         * @example `1986114****4305	`
         */
        accountId: string;
        /**
         * 域名支持的协议类型。
         * - **HTTP**：仅支持HTTP协议。
         * - **HTTPS**：仅支持HTTPS协议。
         * - **HTTP,HTTPS**：支持HTTP及HTTPS协议。
         * @example `HTTP	`
         */
        protocol: string;
        /**
         * API的版本。
         * @example `2016-08-15	`
         */
        apiVersion: string;
        /**
         * 域名的创建时间。
         * @example `2020-07-27T08:02:19Z	`
         */
        createdTime: string;
        /**
         * 域名上一次被更新的时间。
         * @example `2020-07-27T08:02:19Z	`
         */
        lastModifiedTime: string;
        /**
         * HTTPS证书的配置信息。
         */
        certConfig: any;
        /**
         * TLS配置信息。
         */
        tlsConfig: any;
        /**
         * 路由表：定义域名访问时的PATH到Function的映射。
         */
        routeConfig: any;
        /**
         * Web应用防火墙配置信息。
         */
        wafConfig: any;
    }[];
}
