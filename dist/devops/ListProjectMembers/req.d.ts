export interface ListProjectMembersRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 项目id，同spaceIdentifier
     * @example `e8bxxxxx2abd6e76aa209b07d23`
     */
    "projectId": string;
    /**
     * 请求资源的类型，这里填Space即可。
     * @example `Space`
     */
    "targetType": string;
}
