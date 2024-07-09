export interface UpdatePipelineRequest {
    /**
     * 管道ID
     * @example `****d80e4e4044975745c14b****`
     */
    "PipelineId": string;
    /**
     * 管道名称
     * @example `test-pipeline`
     */
    "Name"?: string;
    /**
     * 管道状态。
     * @example `Paused`
     */
    "Status"?: string;
    /**
     * 优先级。取值范围：1-10。
     * @example `6`
     */
    "Priority"?: number;
}
