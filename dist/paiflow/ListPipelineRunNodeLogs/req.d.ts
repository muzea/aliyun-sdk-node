export interface ListPipelineRunNodeLogsRequest {
    /**
     * 工作流任务ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `flow-73186********nku43`
     */
    "PipelineRunId": string;
    /**
     * 工作流任务节点ID。如何获取节点ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `node-hh5yc********mz8ms`
     */
    "NodeId": string;
    /**
     * 页数（偏移量），默认值为0。
     * @example `0`
     */
    "Offset"?: number;
    /**
     * 每页返回的日志数目。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 查询时间范围的开始时间，格式为时间戳，单位为秒。
     * @example `1612180056`
     */
    "FromTimeInSeconds"?: number;
    /**
     * 搜索词。支持模糊匹配。
     * @example `abc`
     */
    "Keyword"?: string;
    /**
     * 是否倒排，取值如下：
     * - false（默认值）：正序排列日志。
     * - true：倒序排列日志。
     * @example `false`
     */
    "Reverse"?: boolean;
    /**
     * 查询时间范围的结束时间，格式为时间戳，单位为秒。
     * @example `1612180056`
     */
    "ToTimeInSeconds"?: number;
    /**
     * 被分享的工作流任务的ID。
     * @example `https://pai.console.aliyun.com/?regionId=cn-hangzhou&workspaceId=102******&mode=noSidebar#/paiflow/pipeline-runs/flow-6y7******?Token=eyJ0e******`
     */
    "TokenId"?: string;
}
