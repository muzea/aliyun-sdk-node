export interface EstimatedLogstashRestartTimeResponse {
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
         * 单位。
         * @example `second`
         */
        unit: string;
        /**
         * 重启预估时间。
         * @example `600`
         */
        value: number;
    };
}
