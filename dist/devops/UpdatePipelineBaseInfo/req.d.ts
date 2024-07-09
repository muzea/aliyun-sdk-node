export interface UpdatePipelineBaseInfoRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线ID，可在流水线链接中获取，如https://flow.aliyun.com/pipelines/【PipelineId】/current
     * @example `12`
     */
    "pipelineId"?: string;
    /**
     * 流水线名称
     * @example `流水线名称`
     */
    "pipelineName": string;
    /**
     * - 0 日常环境
     * - 1 预发环境
     * - 2 正式环境
     * @example `0`
     */
    "envId"?: number;
    /**
     * 标签Id，多个逗号
     * @example `"11,222,33"`
     */
    "tagList"?: string;
}
