export interface GetPipelineEmasArtifactUrlRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * emas任务id，可通过API https://help.aliyun.com/document_detail/460565.html
     * @example `Psaxsa`
     */
    "emasJobInstanceId": string;
    /**
     * emas构建产物md5，可通过API https://help.aliyun.com/document_detail/460565.html
     * @example `assasas`
     */
    "md5": string;
    /**
     * 流水线Id
     * @example `1111`
     */
    "pipelineId": number;
    /**
     * 流水线运行实例id
     * @example `1`
     */
    "pipelineRunId": number;
    /**
     * 服务连接id
     * @example `122`
     */
    "serviceConnectionId": number;
}
