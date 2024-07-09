export interface ListPipelinesRequest {
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 需要过滤的工作流标识。
     * @example `SqlWriteTable_2`
     */
    "PipelineIdentifier"?: string;
    /**
     * 需要过滤的工作流提供者。PAI官方提供的工作流，Provider为pai，您创建的工作流，该值为您的云账号ID。
     * @example `pai`
     */
    "PipelineProvider"?: string;
    /**
     * 需要过滤的工作流版本。
     * @example `v1`
     */
    "PipelineVersion"?: string;
    /**
     * 需要过滤的工作空间ID。
     * @example `726**`
     */
    "WorkspaceId"?: string;
    /**
     * 是否模糊匹配。
     * @example `false`
     */
    "FuzzyMatching"?: boolean;
}
