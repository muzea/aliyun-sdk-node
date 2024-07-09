export interface ConfirmPipelineBatchRequest {
    /**
     * 批次ID。
     * @example `e2e-vds-feh-***`
     */
    "PipelineId": string;
    /**
     * 是否开始下一批次。取值说明如下：
     * - **true**：开始下一批次。
     * - **false**：终止流程。
     * @example `true`
     */
    "Confirm": boolean;
}
