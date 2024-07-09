export interface GetInstanceMetricsResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果说明。
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400
     * - 404
     * @example `null`
     */
    HttpStatusCode: number;
    /**
     * 实例ID。
     * @example `dsw-730xxxxxxxxxx`
     */
    InstanceId: string;
    /**
     * 实例对应的Pod指标详情。
     */
    PodMetrics: {
        /**
         * 实例对应的某个Pod ID。
         * @example `dsw-15870-695f44c5bc-hd6xm`
         */
        PodId: string;
        /**
         * 实例对应的Pod指标。
         */
        Metrics: {
            /**
             * 该指标对应的时间戳。
             * @example `1670890560`
             */
            Time: number;
            /**
             * 指标的值。
             * @example `25.901031`
             */
            Value: number;
        }[];
    }[];
}
