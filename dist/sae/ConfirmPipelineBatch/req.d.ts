interface ConfirmPipelineBatchRequest {
    "RegionId"?: string;
    /**
    * 批次 ID
    * @example `xxx-xxx-xxx-xxx`
    */ "PipelineId": string;
    /**
    * 是否开始下一批次
    * @example `true`
    */ "Confirm": boolean;
}
export { ConfirmPipelineBatchRequest };