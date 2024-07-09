export interface DescribeComponentIndexResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 模板信息。
         */
        template: {
            /**
             * 模板别名配置。
             * @example `{}`
             */
            aliases: any;
            /**
             * 模板mappings配置。
             * @example `{ "properties": { "@timestamp": { "type": "date" } } }`
             */
            mappings: any;
            /**
             * 模板settings配置。
             * @example `{ "index.number_of_replicas": 0 }`
             */
            settings: any;
        };
        /**
         * 元数据，用于存储备注等信息。
         * @example `{ "description": "set number of shards to one" }`
         */
        _meta: any;
    };
}
