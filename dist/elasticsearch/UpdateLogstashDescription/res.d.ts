export interface UpdateLogstashDescriptionResponse {
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
         * 实例名称。
         * @example `logstash_name`
         */
        description: string;
    };
}
