export interface ListDeprecatedTemplatesResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 返回结果条数。
         * @example `5`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果信息。
     */
    Result: {
        /**
         * 是否匹配数据流：
         * - true：匹配
         * - false：不匹配
         * @example `false`
         */
        dataStream: boolean;
        /**
         * 索引模板信息。
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
             * 模板别名配置。
             * @example `"{}"`
             */
            aliases: string;
            /**
             * 模板的mappings配置。
             * @example `"{\"properties\":{\"created_at\":{\"format\":\"EEE MMM dd HH:mm:ss Z yyyy\",\"type\":\"date\"},\"host_name\":{\"type\":\"keyword\"}}}"`
             */
            mappings: string;
            /**
             * 模板的settings配置。
             * @example `"{\"index.number_of_shards\":\"1\"}"`
             */
            settings: string;
        };
        /**
         * 索引模板的版本。
         * @example `70000`
         */
        version: string;
    }[];
}
