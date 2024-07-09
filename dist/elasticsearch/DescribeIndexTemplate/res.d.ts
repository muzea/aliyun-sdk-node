export interface DescribeIndexTemplateResponse {
    /**
     * 请求ID。
     * @example `25DB38F8-82E4-4D16-82BB-FF077C7F****`
     */
    RequestId: string;
    /**
     * 返回索引模板详情。
     */
    Result: {
        /**
         * 是否开启数据流：
         * - true：开启
         * - false：不开启
         * 默认值：false（不开启）。
         * @example `true`
         */
        dataStream: boolean;
        /**
         * 索引模版名称。
         * @example `data-stream-default`
         */
        indexTemplate: string;
        /**
         * 生命周期策略名称。
         * @example `cube_default_ilm_policy`
         */
        ilmPolicy: string;
        /**
         * 优先级。
         * @example `0`
         */
        priority: number;
        indexPatterns: string[];
        /**
         * 组件模版。
         */
        template: {
            /**
             * settings设置。
             * @example `{\"index.refresh_interval\":\"1s\"}`
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
