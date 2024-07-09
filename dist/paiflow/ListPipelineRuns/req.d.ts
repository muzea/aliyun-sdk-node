export interface ListPipelineRunsRequest {
    /**
     * 工作流任务列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的工作流任务数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 工作流任务来源ID。请在工作流详情页面查看工作流任务来源ID，详情请参见[管理工作流](~~480625~~)。
     * @example `ybpy**********fb2z
    `
     */
    "SourceId"?: string;
    /**
     * 工作流任务名称。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 排序的顺序，取值如下，与SortBy一起使用。
     * - ASC：升序。
     * - DESC（默认值）：降序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 工作流任务来源类型，支持如下值：
     * - UNKNOWN（默认）：未指定来源类型时的默认值。
     * - SDK：通过SDK创建的工作流任务。
     * - DESIGNER：通过Designer创建的工作流任务。
     * - M6：通过其他网站创建的工作流任务。
     * @example `UNKNOWN`
     */
    "SourceType"?: string;
    /**
     * 需要过滤的工作流任务的状态，目前有如下几种状态：
     * - Initialized
     * - Running
     * - Succeeded
     * - Failed
     * - Terminated
     * - Unknown
     * - Skipped
     * - Terminating
     * @example `Succeeded`
     */
    "Status"?: string;
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `104623`
     */
    "WorkspaceId"?: string;
    /**
     * 用户ID。
     * @example `155**********904
    `
     */
    "UserId"?: string;
    /**
     * 工作流的ID集合，多个工作流ID使用半角逗号（,）分隔。如何获取工作流ID，请参见[ListPipelines](~~438051~~)。
     * @example `flow-rer7**********0otv, flow-hynm**********sfef`
     */
    "PipelineIds"?: string;
    /**
     * 用于排序的字段。目前有如下字段支持用于排序：
     * - PipelineId
     * - UserId
     * - ParentUserId
     * - StartedAt
     * - FinishedAt
     * - WorkflowServiceId
     * - Duration
     * - GmtCreateTime
     * - GmtModifiedTime
     * @example `PipelineId`
     */
    "SortBy"?: string;
    /**
     * 工作流任务ID，如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `
    flow-14vioac3k1s07k****`
     */
    "PipelineRunId"?: string;
}
