export interface DescribePipelineManagementConfigResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * Elasticsearch实例的访问地址列表，格式为：`域名:端口号`。
         * @example `["http://es-cn-n6w1o1x0w001c****.elasticsearch.aliyuncs.com:9200"]`
         */
        endpoints: string;
        /**
         * 访问实例的用户名。
         * @example `elastic`
         */
        userName: string;
        /**
         * 管道管理方式。支持Kibana和MULTIPLE_PIPELINE。
         * @example `MULTIPLE_PIPELINE`
         */
        pipelineManagementType: string;
        /**
         * Elasticsearch实例ID。
         * @example `es-cn-n6w1o1x0w001c****`
         */
        esInstanceId: string;
        pipelineIds: string[];
    };
}
