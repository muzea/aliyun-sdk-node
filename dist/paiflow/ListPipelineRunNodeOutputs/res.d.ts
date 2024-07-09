export interface ListPipelineRunNodeOutputsResponse {
    /**
     * 请求ID。
     * @example `473469C7-****-****-****-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 符合过滤条件的作业数量。
     * @example `2`
     */
    TotalCount: number;
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
         * @example `Model`
         */
        Type: string;
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
         * 输出产物所属的工作流任务节点的ID。
         * @example `node-obpzu*******418grb7`
         */
        NodeId: string;
        /**
         * 被扩展的输出产物的索引号，起始值为0。
         * @example `0`
         */
        ExpandedArtifactIndex: number;
        /**
         * 被扩展的输出产物的名称。
         * @example `inputArtifact`
         */
        ExpandableArtifactName: string;
        /**
         * 输出产物的信息。
         * @example `{         "metadata": {           "type": {             "Model": {               "locationType": "MaxComputeOfflineModel",               "modelType": "OfflineModel"             }           }         }`
         */
        Info: any;
        /**
         * 输出产物的生产者。
         * @example `id-3d25-************-77856`
         */
        Producer: string;
    }[];
}
