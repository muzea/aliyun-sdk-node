export interface DescribeExperimentEnvProgressResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 开通状态。
         * 取值：
         * - **NotOpen**：未开通。
         * - **Processing**：开通中。
         * - **Running**：运行中。
         * @example `Processing`
         */
        status: string;
        /**
         * 执行进度，范围为0-100，100为执行结束。
         * @example `80`
         */
        progress: number;
    };
    /**
     * 请求ID。
     * @example `E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B`
     */
    requestId: string;
}
