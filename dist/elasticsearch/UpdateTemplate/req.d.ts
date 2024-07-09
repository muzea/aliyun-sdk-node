export interface UpdateTemplateRequest {
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 模板名称。可选值：
     * - dynamicSettings：集群动态配置
     * - indexTemplate：索引模板配置
     * - ilmPolicy：索引生命周期配置
     * - staticSettings：集群动态配置
     * @example `dynamicSettings`
     */
    "TemplateName": string;
    /**
     * 指定模板配置内容，详细信息请参见下文的RequestBody章节。
     * @example `{     "content": "{\n\t\"persistent\":{\n\t\t\"search\":{\n\t\t\t\"max_buckets\":\"10000\"\n\t\t}\n\t}\n}" }`
     */
    "body"?: string;
}
