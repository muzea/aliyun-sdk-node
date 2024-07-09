export interface ListPipelineRunsStatusResponse {
    /**
     * 请求ID。
     * @example `473469C7-****-****-****-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 工作流任务列表。
     */
    PipelineRuns: {
        /**
         * 工作流任务ID。
         * @example `flow-hynm2bv8wqhp5esfxq`
         */
        PipelineRunId: string;
        /**
         * 工作流任务状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 工作流任务名字。
         * @example `myName`
         */
        Name: string;
        /**
         * 工作流所属用户ID。
         * @example `1557702098194904`
         */
        UserId: string;
        /**
         * 工作流所属主账户ID。
         * @example `1557702098194904`
         */
        ParentUserId: string;
        /**
         * 节点ID。
         * @example `node-98odqfpcjzwdf3caq3`
         */
        NodeId: string;
        /**
         * 工作流任务来源ID。
         * @example `lmi7d24h3kr0xczjlu`
         */
        SourceId: string;
        /**
         * 是否被删除，可能值：
         * - true：代表已被删除。
         * - false：代表未被删除。
         * @example `false`
         */
        IsDeleted: boolean;
    }[];
    /**
     * 工作流任务节点列表。
     */
    Nodes: {
        /**
         * 工作流任务ID。
         * @example `flow-hynm2bv8wqhp5esfxq`
         */
        PipelineRunId: string;
        /**
         * 工作流任务节点ID。
         * @example `node-hynm2bv8wqhp5esfx1`
         */
        NodeId: string;
        /**
         * 工作流任务节点状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 输入Artifact是否已保存：
         * - true：表示已保存。
         * - false：表示未保存。
         * @example `true`
         */
        InputArtifactArchived: boolean;
        /**
         * 输出Artifact是否已保存：
         * - true：表示已保存。
         * - false：表示未保存。
         * @example `true`
         */
        OutputArtifactArchived: boolean;
        /**
         * 工作流任务节点的开始运行时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。
         * @example `2021-01-21T17:12:35.232Z`
         */
        StartedAt: string;
        /**
         * 工作流任务节点的结束运行时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。
         * @example `2021-01-21T17:12:35.232Z`
         */
        FinishedAt: string;
        /**
         * 工作流任务节点名。
         * @example `dataSource`
         */
        NodeName: string;
    }[];
    /**
     * 工作流任务节点的输出产物列表。
     */
    Outputs: {
        /**
         * 工作流任务节点的输出产物名称。
         * @example `model_******`
         */
        Name: string;
        /**
         * 输出产物的类型，可能值：
         * - Model：模型。
         * - DataSet：数据集。
         * - Metrics：度量数据。
         * - ModelEvaluation：模型评估结果。
         * @example `DataSet`
         */
        Type: string;
        /**
         * 输出产物的元数据。
         */
        Metadata: any;
        /**
         * 输出产物的创建时间。
         * @example `2021-01-30T12:51:33.028Z`
         */
        GmtCreateTime: string;
        /**
         * 输出产物的ID。
         * @example `artifact-ty1xwv*******s8zf`
         */
        Id: string;
        /**
         * 输出产物的生产者。
         * @example `id-3d25-************-77856`
         */
        Producer: string;
        /**
         * 输出产物所属的工作流任务节点的ID。
         * @example `node-obpzu*******418grb7
        `
         */
        NodeId: string;
        /**
         * 输出产物所属的工作流任务的ID。
         * @example `flow-dsjfk******jdskls`
         */
        PipelineRunId: string;
        /**
         * 输出产物的值。
         * @example `{\"name\": \"model_flow_*********_node_**********_model\", \"location\": {\"name\": \"model_flow_**********_node_***********_model\", \"endpoint\": \"http://service.odps.aliyun.com/api\", \"project\": \"********\"}}`
         */
        Value: string;
        /**
         * 输出产物被扩展Artifact的索引号，起始值为0。
         * @example `0`
         */
        ExpandedArtifactIndex: number;
        /**
         * 输出产物可扩展Artifact的名称。
         * @example `inputArtifact`
         */
        ExpandableArtifactName: string;
    }[];
}
