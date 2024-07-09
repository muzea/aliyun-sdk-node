export interface EstimatedRestartTimeResponse {
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
         * 单位。
         * @example `second`
         */
        unit: string;
        /**
         * 重启预估时间。
         * @example `50`
         */
        value: number;
    };
}
