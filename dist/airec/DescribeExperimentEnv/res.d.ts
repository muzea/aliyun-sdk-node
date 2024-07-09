export interface DescribeExperimentEnvResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 分桶数。
         * @example `10`
         */
        bucketCount: number;
        /**
         * 分桶方式UID/IMEI。
         * @example `UID`
         */
        divideType: string;
    };
    /**
     * 请求ID。
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
}
