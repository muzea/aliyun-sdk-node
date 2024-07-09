export interface GetPipelineRunRequest {
    /**
     * 工作流任务ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `run-rbvg**********ks92
    `
     */
    "PipelineRunId": string;
    /**
     * 是否返回详细信息，取值如下。
     * - 关闭开关：不显示详细信息。
     * - 打开开关：显示详细信息，目前详细信息包含Manifest字段。
     * @example `false
    `
     */
    "Verbose"?: boolean;
    /**
     * 具体返回哪种类型的Manifest信息，取值如下。
     * - Raw（默认）：用户提交的原始Manifest。
     * - Frozen：针对每个Pipeline生成唯一Uuid，将其版本固化下来。即使遇到子Pipeline定义三元组不变进行升级，依然会使用一开始的版本(Uuid)，不受影响；即可基于该Manifest进行重跑。
     * - Rendered：将相关信息进行注入和渲染，包括：补全运行环境信息并优化等。
     * @example `Raw`
     */
    "ManifestType"?: string;
    /**
     * 被分享的工作流任务的ID。
     * @example `https://pai.console.aliyun.com/?regionId=cn-hangzhou&workspaceId=102******&mode=noSidebar#/paiflow/pipeline-runs/flow-6y7******?Token=eyJ0e******`
     */
    "TokenId"?: string;
}
