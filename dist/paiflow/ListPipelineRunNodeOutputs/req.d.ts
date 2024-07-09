export interface ListPipelineRunNodeOutputsRequest {
    /**
     * 工作流任务ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `flow-n06dn********rfc53`
     */
    "PipelineRunId": string;
    /**
     * 工作流任务节点ID。如何获取节点ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `node-n06dn********rfc53`
     */
    "NodeId": string;
    /**
     * 查询节点详细信息的深度（层数），当Depth为2时，将会返回该节点及其下一层的所有子节点的信息。
     * @example `2`
     */
    "Depth": number;
    /**
     * 查询的工作流任务节点的名称。
     * @example `myName`
     */
    "Name"?: string;
    /**
     * 当前页，起始值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回的输出数目。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 用于排序返回结果的字段，目前支持如下字段：
     * - Name
     * - Type
     * - GmtCreateTime
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序顺序，取值如下，与SortBy一起使用。
     * - DESC（默认值）：降序排列。
     * - ASC：升序排列。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 工作流任务节点产物（Artifact）的类型：
     * - Model：模型。
     * - DataSet：数据集。
     * - Metrics：度量数据。
     * - ModelEvaluation：模型评估结果。
     * @example `DataSet`
     */
    "Type"?: string;
    /**
     * 被分享的工作流任务的ID。
     * @example `https://pai.console.aliyun.com/?regionId=cn-hangzhou&workspaceId=102******&mode=noSidebar#/paiflow/pipeline-runs/flow-6y7******?Token=eyJ0e******
    `
     */
    "TokenId"?: string;
}
