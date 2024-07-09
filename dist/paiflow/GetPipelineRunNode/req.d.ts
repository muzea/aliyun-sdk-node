export interface GetPipelineRunNodeRequest {
    /**
     * 工作流任务的ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `flow-ebppc********5lwea`
     */
    "PipelineRunId": string;
    /**
     * 工作流任务中一个节点的ID。如何查看节点ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `node-wcs9z********27ps3`
     */
    "NodeId": string;
    /**
     * 查询节点详细信息的深度（层数），当Depth为2时，将会返回该节点及其下一层的所有子节点的详细信息。
     * @example `2`
     */
    "Depth"?: number;
    /**
     * 节点类型，取值如下。
     * * Logical（默认值）：表示逻辑节点，用户提交节点的都是逻辑节点。
     * * Physical：表示物理节点，对应一个执行特定逻辑的容器的运行，逻辑节点在后台运行时会转换为物理节点。
     * @example `Logical`
     */
    "Type"?: string;
    /**
     * 被分享的工作流任务的ID。
     * @example `https://pai.console.aliyun.com/?regionId=cn-hangzhou&workspaceId=102******&mode=noSidebar#/paiflow/pipeline-runs/flow-6y7******?Token=eyJ0e******
    `
     */
    "TokenId"?: string;
}
