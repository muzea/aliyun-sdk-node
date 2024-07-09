export interface ListPipelineRunsStatusRequest {
    /**
     * 查询请求。
     */
    "body"?: {
        /**
         * 要查询的工作流任务列表，PipelineRuns参数与Nodes参数两选一，优先Nodes。
         */
        PipelineRuns: string[];
        /**
         * 要查询的节点列表，Nodes参数与PipelineRuns参数两选一，优先Nodes。
         */
        Nodes: {
            /**
             * 工作流任务的ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
             * @example `flow-hynm2bv8wqhp5esfxq`
             */
            PipelineRunId: string;
            /**
             * 工作流任务节点的ID。如何获取节点ID，请参见[ListPipelineRuns](~~438042~~)。
             * @example `node-hynm2bv8wqhp5esfx1`
             */
            NodeId: string;
        }[];
        /**
         * 工作空间的ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `948**
        `
         */
        WorkspaceId: string;
        /**
         * 工作流任务节点产物（Artifact）的类型，取值如下：
         * - Model：模型。
         * - DataSet：数据集。
         * - Metrics：度量数据。
         * - ModelEvaluation：模型评估结果。
         * @example `DataSet`
         */
        OutputType: string;
    };
}
