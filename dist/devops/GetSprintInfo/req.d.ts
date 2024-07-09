export interface GetSprintInfoRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 迭代id
     * @example `d061ca90d47a0b7cd4d2...`
     */
    "sprintId": string;
}
