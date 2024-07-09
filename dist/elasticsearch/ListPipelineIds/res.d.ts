export interface ListPipelineIdsResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果列表。
     */
    Result: {
        /**
         * Kibana上创建的管道ID。
         * @example `testKibanaManagement`
         */
        pipelineId: string;
        /**
         * 管道是否可用，取值含义如下：
         * - true：可用。
         * - false：不可用。
         * @example `true`
         */
        available: boolean;
        /**
         * 管道不可用错误码。
         * @example `OK`
         */
        code: string;
        /**
         * 管道不可用错误信息。
         * @example `OK`
         */
        message: string;
    }[];
}
