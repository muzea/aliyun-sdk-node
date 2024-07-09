export interface UpdatePipelineRunRequest {
    /**
     * 工作流任务ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `flow-rbvg5wzljzjhc9ks92`
     */
    "PipelineRunId": string;
    /**
     * 工作流任务。
     */
    "body"?: {
        /**
         * 输入更新后的工作流任务名称。
         * @example `testName`
         */
        Name: string;
    };
}
