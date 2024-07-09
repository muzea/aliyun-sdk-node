export interface UpdateComponentIndexRequest {
    /**
     * 实例ID。
     * @example `es-cn-t57p81n7ai89v****`
     */
    "InstanceId": string;
    /**
     * 模板名称。
     * @example `component-openstore-index-template`
     */
    "name": string;
    /**
     * RequestBody参数。
     */
    "body"?: {
        /**
         * 组合模板信息。
         */
        template: {
            /**
             * 模板settings配置。
             * @example `{ "index.number_of_replicas": 0 }`
             */
            settings: any;
            /**
             * 模板mappings配置。
             * @example `{ "properties": { "@timestamp": { "type": "date" } } }`
             */
            mappings: any;
            /**
             * 模板别名配置。
             * @example `{}`
             */
            aliases: any;
        };
        /**
         * 元数据，用于存储备注等信息。
         * @example `{ "description": "set number of shards to one" }`
         */
        _meta: any;
    };
}
