export interface ListPipelineResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 总记录数。
         * @example `2`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 管道ID。
         * @example `pipeline_test`
         */
        pipelineId: string;
        /**
         * 管道更新时间。
         * @example `2020-08-05T08:43:31.757Z`
         */
        gmtUpdateTime: string;
        /**
         * 管道创建时间。
         * @example `2020-08-05T03:10:38.188Z`
         */
        gmtCreatedTime: string;
        /**
         * 管道状态，支持：
         * - NOT_DEPLOYED：未部署
         * - RUNNING：运行中
         * - DELETED：已删除（控制台不展示此状态）
         * @example `NOT_DEPLOYED`
         */
        pipelineStatus: string;
    }[];
}
