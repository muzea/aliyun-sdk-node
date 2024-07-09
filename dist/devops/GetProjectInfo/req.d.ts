export interface GetProjectInfoRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 项目id，同spaceIdentifier
     * @example `e8b2xxxxxxx09b07d23`
     */
    "projectId": string;
}
