export interface GetPipelineRunNodeResponse {
    /**
     * 请求ID。
     * @example `0a981ea816**********42244e7ba2`
     */
    RequestId: string;
    /**
     * 工作流定义的版本。
     * @example `core/v1`
     */
    ApiVersion: string;
    /**
     * 节点的元信息。
     */
    Metadata: {
        /**
         * 节点的ID。
         * @example `node-wcs9z********27ps3`
         */
        NodeId: string;
        /**
         * 节点所对应的工作流的提供方，通常情况下指代工作流的上传者（官方提供的工作流Provider为PAI）。
         * @example `15577********904`
         */
        Provider: string;
        /**
         * 节点的名称。
         * @example `flow-ebppc********5lwea`
         */
        Name: string;
        /**
         * 节点所对应的工作流的版本。
         * @example `v1`
         */
        Version: string;
        /**
         * 节点所对应的工作流的标识名。
         * @example `composite-pipeline`
         */
        Identifier: string;
        /**
         * 节点的类型，可能值：
         * - Pod：具体运行的一个节点。
         * - Dag：复合类型节点，本质是一个由子节点组成的Dag图。
         * @example `Dag`
         */
        NodeType: string;
        /**
         * Alink逻辑节点所对应的物理节点ID或Alink物理节点所对应的逻辑节点ID。
         */
        RelatedNodeIds: string[];
        /**
         * 节点的展示名称（可能会被修改）。
         * @example `flow-ebppc********5lwea`
         */
        DisplayName: string;
    };
    /**
     * 节点的定义。
     */
    Spec: {
        /**
         * 该节点是否含有子节点，可能值：
         * - true：该节点为复合类型节点，如果需要进一步查询其子节点信息，需要传入更深的Depth参数。
         * - false：该节点为实际运行的节点。
         * @example `true`
         */
        HasPipelines: boolean;
        /**
         * 节点与其他节点的依赖关系。
         */
        Dependencies: string[];
        /**
         * 子节点列表。
         */
        Pipelines: any[];
        /**
         * 节点的输入信息。
         */
        Inputs: {
            /**
             * 节点的输入产物列表。
             */
            Artifacts: any[];
            /**
             * 节点的输入参数列表。
             */
            Parameters: any[];
        };
        /**
         * 节点的输出信息。
         */
        Outputs: {
            /**
             * 节点的输出产物列表。
             */
            Artifacts: any[];
            /**
             * 节点的输出参数列表。
             */
            Parameters: any[];
        };
        /**
         * 节点运行的判断条件。
         * - 如果运行条件返回为真，就执行该节点。
         * - 如果运行条件返回为假，该节点被跳过，状态为Skipped。
         * @example `”{{inputs.parameters.skip}} == false“`
         */
        When: string;
        /**
         * 将工作流节点扩展为多个工作流节点。
         */
        WithItems: string[];
        /**
         * 指向一个参数，该参数的值是一个数组，数组的每一项会扩展为一个工作流节点。
         * @example `"{{pipelines.generate.outputs.result}}"`
         */
        WithParam: string;
        /**
         * 指向一个数字序列，序列中的每一项会扩展为一个工作流节点。
         */
        WithSequence: {
            /**
             * 数字序列的起始数字。
             * @example `1`
             */
            Start: number;
            /**
             * 数字序列的结束数字。
             * @example `10`
             */
            End: number;
            /**
             * 对数字序列的值进行格式化。
             * @example `"2020-05-%d"`
             */
            Format: string;
        };
        /**
         * 节点并行度上限。
         * @example `2`
         */
        Parallelism: number;
    };
    /**
     * 节点的执行状态信息。
     */
    StatusInfo: {
        /**
         * 节点执行的结束时间。
         * @example `2021-10-15T10:40:54.000Z`
         */
        FinishedAt: string;
        /**
         * 节点执行的开始时间。
         * @example `2021-10-15T10:39:58.000Z`
         */
        StartedAt: string;
        /**
         * 节点的运行状态，可能值：
         * - Succeeded：运行成功。
         * - Running：运行中。
         * - Failed：运行失败。
         * - Skipped：跳过（前序节点失败导致）。
         * - ReadyToSchedule：准备运行（前序节点未完成导致）。
         * - Unknown：未知。
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 节点的运行状况列表。
         */
        Conditions: any[];
        /**
         * 节点的运行进度。
         * @example `9/9`
         */
        Progress: string;
    };
}
