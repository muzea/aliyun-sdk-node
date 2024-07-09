export interface CreateDomainRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 请求消息体。
     */
    "body": {
        /**
         * 域名。
         * @example `example.com`
         */
        domainName: string;
    };
}
