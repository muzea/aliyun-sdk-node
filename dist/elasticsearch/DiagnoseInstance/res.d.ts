export interface DiagnoseInstanceResponse {
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
         * 诊断报告生成的时间戳。
         * @example `1535745731000`
         */
        createTime: number;
        /**
         * 报告ID。
         * @example `trigger__2020-08-17T17:09:02`
         */
        reportId: string;
        /**
         * 诊断状态。支持：SUCCESS、FAILED和RUNNING。
         * @example `RUNNING`
         */
        state: string;
        /**
         * 诊断的实例ID。
         * @example `es-cn-n6w1o1x0w001c****`
         */
        instanceId: string;
    };
}
