export interface ContinuePipelineRequest {
    /**
     * 流程ID。可通过GetChangeOrderInfo接口获取1次变更的相关批次的流程ID，请参见[GetChangeOrderInfo](~~62072~~)。
     * @example `5648dbd7-df13********************`
     */
    "PipelineId": string;
    /**
     * 是否执行下一批发布。
     * - true：执行下一批发布。
     * - false：不执行下一批发布。
     * @example `true`
     */
    "Confirm"?: boolean;
}
