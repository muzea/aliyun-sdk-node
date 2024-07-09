export interface CreateCnameTokenRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 创建CnameToken的请求体。
     */
    "body"?: {
        /**
         * 保存Cname配置的容器。
         */
        BucketCnameConfiguration: {
            /**
             * 保存要生成Token的Cname域名。
             */
            Cname: {
                /**
                 * 目标Cname域名。
                 * @example `example.com`
                 */
                Domain: string;
            };
        };
    };
}
