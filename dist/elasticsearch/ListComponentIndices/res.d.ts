export interface ListComponentIndicesResponse {
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
         * @example `10`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果详情。
     */
    Result: {
        /**
         * 引用该组合模板的索引模板信息。
         */
        composed: string[];
        /**
         * 组合模板内容。
         */
        content: {
            /**
             * 组合模版对象。
             */
            template: {
                /**
                 * 模板settings配置。
                 */
                settings: {
                    /**
                     * 索引信息。
                     */
                    index: {
                        /**
                         * 索引压缩方法。支持：
                         * - LZ4：Elasticsearch的默认压缩算法，解压或压缩效率很快，但压缩率较低一些。
                         * - best_compression：使用best_compression算法进行压缩，具有更高的压缩率。
                         * @example `best_compression`
                         */
                        codec: string;
                        /**
                         * 索引生命周期配置。
                         */
                        lifecycle: {
                            /**
                             * 生命周期策略名称。
                             * @example `synthetics`
                             */
                            name: string;
                        };
                    };
                };
            };
            /**
             * 组合模板的版本。
             * @example `0`
             */
            version: number;
            /**
             * 元数据，用于存储备注等信息。
             * @example `{ "description": "set number of shards to one" }`
             */
            _meta: any;
        };
        /**
         * 组合模板名称。
         * @example `synthetics-settings`
         */
        name: string;
    }[];
}
