export interface ListPipelineJobHistorysRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线Id
     * @example `123`
     */
    "pipelineId": string;
    /**
     * 任务分类，暂时只支持DEPLOY
     * @example `DEPLOY`
     */
    "category": string;
    /**
     * 任务标识
     * @example `10_ssasasa`
     */
    "identifier": string;
    /**
     * 下一页token
     * @example `xsaxsa`
     */
    "nextToken"?: string;
    /**
     * 每页最大数据，最多支持50
     * @example `10`
     */
    "maxResults": number;
}
