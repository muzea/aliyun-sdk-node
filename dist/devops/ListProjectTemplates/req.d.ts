export interface ListProjectTemplatesRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 模板类型，这里的场景只用填Project
     * @example `Project`
     */
    "category": string;
}
