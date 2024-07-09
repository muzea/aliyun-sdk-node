export interface DescribeXpackMonitorConfigResponse {
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
         * X-Pack监控关联的Elasticsearch实例的访问用户名。
         * @example `elastic`
         */
        userName: string;
        /**
         * X-Pack监控关联的Elasticsearch实例ID。
         * @example `es-cn-n6w1o1x0w001c****`
         */
        esInstanceId: string;
        /**
         * 是否开启X-Pack监控：
         * - true：开启
         * - false：未开启
         * @example `true`
         */
        enable: boolean;
        endpoints: string[];
        pipelineIds: string[];
    };
}
