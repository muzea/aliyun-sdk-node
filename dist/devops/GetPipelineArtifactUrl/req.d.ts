export interface GetPipelineArtifactUrlRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 文件路径，可通过API https://help.aliyun.com/document_detail/460565.html
     * @example `/test/test/test.tgz`
     */
    "filePath": string;
    /**
     * 文件名称，可通过API https://help.aliyun.com/document_detail/460565.html 获取
     * @example `test.tgz`
     */
    "fileName": string;
}
