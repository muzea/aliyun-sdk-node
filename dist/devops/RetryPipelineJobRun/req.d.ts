export interface RetryPipelineJobRunRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线ID，可在流水线链接中获取，如https://flow.aliyun.com/pipelines/【PipelineId】/current
     * @example `1`
     */
    "pipelineId": number;
    /**
     * 流水线运行实例id
     * @example `1`
     */
    "pipelineRunId": number;
    /**
     * 任务id，可通过API https://help.aliyun.com/document_detail/460565.html 获取任务Id
     * @example `1`
     */
    "jobId": number;
}
