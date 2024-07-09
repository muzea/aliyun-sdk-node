export interface ListAvailableEsInstanceIdsResponse {
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
         * Elasticsearch实例的公网访问地址。
         * @example `http://es-cn-n6w1o1x0w001c****.elasticsearch.aliyuncs.com:9200`
         */
        endpoint: string;
        /**
         * Elasticsearch实例名称。
         * @example `instanceName`
         */
        description: string;
        /**
         * Kibana的公网访问地址。
         * @example `https://es-cn-n6w1o1x0w001c****.kibana.elasticsearch.aliyuncs.com:5601`
         */
        kibanaEndpoint: string;
        /**
         * Elasticsearch实例ID。
         * @example `es-cn-n6w1o1x0w001c****`
         */
        esInstanceId: string;
    }[];
}
