export interface UpdatePipelineRequest {
    /**
     * 工作流ID。如何获取工作流任务ID，请参见[ListPipelineRuns](~~438042~~)。
     * @example `pipeline-hynm2bv8**********`
     */
    "PipelineId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 工作流定义，具体样例见下方请求参数补充说明。
         * @example `apiVersion: "core/v1"*********`
         */
        Manifest: string;
    };
}
