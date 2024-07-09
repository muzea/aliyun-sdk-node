export interface DescribeUserConfigsResponse {
    /**
     * 请求ID。
     * @example `9BCC7BAA-ACBE-45E5-83F0-98BF7E693E84`
     */
    RequestId: string;
    /**
     * 对应的配置数据。
     */
    Configs: {
        /**
         * OSS日志存储配置。
         */
        OssLogConfig: {
            /**
             * 前缀。
             * @example `test`
             */
            Prefix: string;
            /**
             * 是否开启存储空间。
             * @example `off`
             */
            Enable: string;
            /**
             * 存储空间名称。
             * @example `Buckettest`
             */
            Bucket: string;
        };
        /**
         * WAF功能配置。
         */
        WafConfig: {
            /**
             * 是否开启WAF功能。
             * @example `on`
             */
            Enable: string;
        };
    };
}
