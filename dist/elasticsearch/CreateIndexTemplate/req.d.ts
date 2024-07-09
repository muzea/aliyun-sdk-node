export interface CreateIndexTemplateRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w24n9u900am****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `E1136AE9-4E49-4585-9358-6FDD2A6D****`
     */
    "ClientToken"?: string;
    /**
     * 请求体参数，用来指定待创建的集群索引模板的信息。
     * @example `{     "indexTemplate": "index-template",      "indexPatterns": [         "schema1*",          "schema2*"     ],      "dataStream": true,      "priority": 30,      "ilmPolicy": "policy-1",      "template": {         "settings": "{\"index.number_of_shards\":\"1\"}",          "mappings": "{\"properties\":{\"created_at\":{\"format\":\"EEE MMM dd HH:mm:ss Z yyyy\",\"type\":\"date\"},\"host_name\":{\"type\":\"keyword\"}}}",          "aliases": "{\"mydata\":{}}"     } }`
     */
    "body"?: {
        /**
         * 索引模版名称。
         * @example `index-template`
         */
        indexTemplate: string;
        /**
         * 索引匹配模式正则。
         */
        indexPatterns: string[];
        /**
         * 是否开启数据流。可选值：
         * - true：开启
         * - false（默认）：不开启
         * @example `false`
         */
        dataStream: boolean;
        /**
         * 集群索引模板的优先级。
         * @example `30`
         */
        priority: number;
        /**
         * 生命周期策略名称。
         * @example `policy-1`
         */
        ilmPolicy: string;
        /**
         * 模版设置，详细信息请参见[官方Multiple Component Templates文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-put-template.html#multiple-component-templates)。
         */
        template: {
            /**
             * settings设置。
             * @example `{\"index.number_of_shards\":\"1\"}`
             */
            settings: string;
            /**
             * mappings设置。
             * @example `{\"properties\":{\"created_at\":{\"format\":\"EEE MMM dd HH:mm:ss Z yyyy\",\"type\":\"date\"},\"host_name\":{\"type\":\"keyword\"}}}`
             */
            mappings: string;
            /**
             * aliases设置。
             * @example `{\"mydata\":{}}`
             */
            aliases: string;
        };
    };
}
