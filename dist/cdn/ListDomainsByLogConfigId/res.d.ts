export interface ListDomainsByLogConfigIdResponse {
    /**
     * 请求ID。
     * @example `9732E117-8A37-49FD-A36F-ABBB87556CA7`
     */
    RequestId: string;
    Domains: {
        /**
         * 域名列表。
         */
        Domain: string[];
    };
}
