export interface DescribeTemplatesResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 模板内容。
         * @example `{\n\t\"persistent\":{\n\t\t\"search\":{\n\t\t\t\"max_buckets\":\"10000\"\n\t\t}\n\t}\n}`
         */
        content: string;
        /**
         * 模板名称。支持：
         * - staticSettings：elasticsearch.yml配置
         * - ilmPolicy：索引生命周期配置
         * - indexTemplate：索引模板配置
         * - dynamicSettings：集群动态配置
         * @example `dynamicSettings`
         */
        templateName: string;
    }[];
}
