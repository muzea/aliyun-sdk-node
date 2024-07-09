export interface UpdatePipelineManagementConfigRequest {
    /**
     * Logstash实例ID。
     * @example `ls-cn-oew1qbgl****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 关联的Elasticsearch实例信息。
     * @example `{     "pipelineManagementType": "ES",     "endpoints": [         "http://es-cn-n6w1o1x0w001c****.elasticsearch.aliyuncs.com:9200"     ],     "pipelineIds": [         "testKibanaManagement"     ],     "userName": "elastic",     "password": "xxxx",     "esInstanceId": "es-cn-n6w1o1x0w001c****" }`
     */
    "body"?: {
        /**
         * 开启Kibana管理管道后，Kibana所在Elasticsearch实例的访问地址列表。
         */
        endpoints: string[];
        /**
         * 登录Kibana的用户名。
         * @example `elastic`
         */
        userName: string;
        /**
         * 登录Kibana的密码。
         * @example `******`
         */
        password: string;
        /**
         * Kibana管理的管道列表。
         */
        pipelineIds: string[];
        /**
         * 管道管理方式，可选值：
         * - ES：Kibana管道管理
         * - MULTIPLE_PIPELINE：配置文件管理
         * @example `ES`
         */
        pipelineManagementType: string;
    };
}
