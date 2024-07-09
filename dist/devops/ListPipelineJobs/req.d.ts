export interface ListPipelineJobsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线id
     * @example `1111`
     */
    "pipelineId": string;
    /**
     * 任务分类，暂只支持DEPLOY
     * @example `DEPLOY`
     */
    "category": string;
}
