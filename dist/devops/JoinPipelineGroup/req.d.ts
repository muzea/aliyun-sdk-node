export interface JoinPipelineGroupRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线Id，多个逗号分割
     * @example `122,122`
     */
    "pipelineIds": string;
    /**
     * 流水线分组id ,0 表示将流水线改为未分组
     * @example `11`
     */
    "groupId": number;
}
