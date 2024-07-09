export interface DescribeDeprecatedTemplateResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 返回结果信息。
     */
    Result: {
        /**
         * 是否同时自动创建数据流：
         * - true：是
         * - false：否
         * @example `false`
         */
        dataStream: boolean;
        /**
         * 索引模式信息。
         */
        indexPatterns: string[];
        /**
         * 索引模版名称。
         * @example `openstore-index-template`
         */
        indexTemplate: string;
        /**
         * 优先级。
         * @example `100`
         */
        order: number;
        /**
         * 索引模板配置信息。
         */
        template: {
            /**
             * 别名配置。
             * @example `"{}"`
             */
            aliases: string;
            /**
             * 索引模板的mappings配置。
             * @example `"{\"properties\":{\"created_at\":{\"format\":\"EEE MMM dd HH:mm:ss Z yyyy\",\"type\":\"date\"},\"host_name\":{\"type\":\"keyword\"}}}"`
             */
            mappings: string;
            /**
             * 索引模板的settings配置。
             * @example `"{\"index.number_of_shards\":\"1\"}"`
             */
            settings: string;
        };
        /**
         * 索引模板的版本。
         * @example `70000`
         */
        version: string;
    };
}
