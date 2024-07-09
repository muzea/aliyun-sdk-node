export interface RecommendTemplatesResponse {
    /**
     * 请求ID。
     * @example `66B060CF-7381-49C7-9B89-7757927FDA16`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 模板配置内容。
         * @example `{\n\t\"persistent\": {\n\t\t\"search\": {\n\t\t\t\"max_buckets\": \"10000\"\n\t\t}\n\t}\n}`
         */
        content: string;
        /**
         * 模板名称。支持：
         * - staticSettings：集群静态配置
         * - dynamicSettings：集群动态配置
         * - indexTemplate：索引模板配置
         * - ilmPolicy：索引生命周期配置
         * > 6.7.0及以上版本的日志增强版实例，支持启用索引生命周期模板。
         * @example `dynamicSettings`
         */
        templateName: string;
    }[];
}
