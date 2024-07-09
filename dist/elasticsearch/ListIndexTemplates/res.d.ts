export interface ListIndexTemplatesResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
    /**
     * 索引模板列表信息。
     */
    Result: {
        /**
         * 是否开启数据流，参数取值如下：
         * - true：开启。
         * - false（默认值）：不开启。
         * @example `true`
         */
        dataStream: boolean;
        /**
         * 索引模版名称。
         * @example `my-template`
         */
        indexTemplate: string;
        /**
         * 索引生命周期策略名称。
         * @example `my_ilm_policy`
         */
        ilmPolicy: string;
        /**
         * 索引模板优先级。
         * @example `100`
         */
        priority: number;
        /**
         * 索引模式信息。
         */
        indexPatterns: string[];
        /**
         * 组件模版。
         */
        template: {
            /**
             * settings设置。
             * @example `{\"mydata\":{}}`
             */
            settings: string;
            /**
             * mappings设置。
             * @example `{\"properties\":{\"created_at\":{\"format\":\"EEE MMM dd HH:mm:ss Z yyyy\",\"type\":\"date\"},\"host_name\":{\"type\":\"keyword\"}}}`
             */
            mappings: string;
            /**
             * aliases设置。
             * @example `{\"index.number_of_shards\":\"1\"}`
             */
            aliases: string;
        };
    }[];
}
