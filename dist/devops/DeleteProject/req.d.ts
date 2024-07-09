export interface DeleteProjectRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 项目id，与spaceIdentifier，projectId字段相同
     * @example `7fb72727f32143574f7a...`
     */
    "identifier": string;
}
