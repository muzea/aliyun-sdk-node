export interface DeleteCnameRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 删除Cname配置信息的请求体。
     */
    "body"?: {
        /**
         * 保存Cname配置的容器。
         */
        BucketCnameConfiguration: {
            /**
             * 保存目标Cname域名的容器。
             */
            Cname: {
                /**
                 * 要删除的Cname。
                 * @example `example.com`
                 */
                Domain: string;
            };
        };
    };
}
