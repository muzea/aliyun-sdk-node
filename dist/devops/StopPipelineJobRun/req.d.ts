export interface StopPipelineJobRunRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如 https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线ID，可在流水线链接中获取，如 https:// flow.aliyun.com/pipelines/【PipelineId】/current
     * @example `123`
     */
    "pipelineId": number;
    /**
     * 流水线运行实例id
     * @example `3`
     */
    "pipelineRunId": number;
    /**
     * 流水线运行任务Id，可通过API https://help.aliyun.com/document_detail/460565.html 获取任务Id
     * @example `2324334`
     */
    "jobId": number;
}
