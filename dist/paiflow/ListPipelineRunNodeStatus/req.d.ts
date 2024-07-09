export interface ListPipelineRunNodeStatusRequest {
    /**
     * 工作流任务ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `flow-rbvg5wzljzjhc9****`
     */
    "PipelineRunId": string;
    /**
     * 工作流任务的节点ID。如何获取节点ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `node-kdkfkfds****`
     */
    "NodeId": string;
    /**
     * 查询节点深度，当深度为N时，返回指定节点的N-1层子节点运行状态。
     * @example `2`
     */
    "Depth"?: number;
    /**
     * 节点类型，取值如下：
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
