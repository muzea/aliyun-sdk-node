export interface CreatePipelineRunRequest {
    /**
     * 工作流任务。
     */
    "body"?: {
        /**
         * 工作流的ID。
         * PipelineId和PipelineManifest二选一。
         * @example `flow-rer7y***`
         */
        PipelineId: string;
        /**
         * 工作流任务名字。若为空，则自动生成名字。
         * @example `testName`
         */
        Name: string;
        /**
         * 工作流定义，具体样例见下方请求参数补充说明。
         * PipelineId和PipelineManifest二选一。
         * @example `apiVersion: "core/v1"*********
        `
         */
        PipelineManifest: string;
        /**
         * 参数。
         * @example `arguments:   parameters:   - name: "execution_maxcompute"     value:       endpoint: "http://service***"       odpsProject: "pai***"`
         */
        Arguments: string;
        /**
         * 是否直接启动pipelineRun，取值如下：
         * - true代表直接启动（默认）。
         * - false代表只创建run，但先不启动。
         * @example `true`
         */
        NoConfirmRequired: boolean;
        /**
         * 工作空间ID。
         * @example `84***`
         */
        WorkspaceId: string;
        /**
         * 工作流任务来源类型，支持如下值：
         * - UNKNOWN（默认）
         * - SDK
         * - DESIGNER
         * - M6
         * @example `UNKNOWN`
         */
        SourceType: string;
        /**
         * 来源ID。
         * @example `experiment-ybpy***`
         */
        SourceId: string;
        /**
         * 创建工作流任务选项，格式为JSON。
         * @example `{"mlflow":{"experimentId":"exp-1jdk***"}}`
         */
        Options: string;
        /**
         * 工作空间可见性：
         * - PUBLIC（默认）
         * - PRIVATE
         * @example `PUBLIC`
         */
        Accessibility: string;
    };
}
