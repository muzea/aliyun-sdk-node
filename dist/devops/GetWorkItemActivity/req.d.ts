export interface GetWorkItemActivityRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemIdentifier，工作项唯一标识
     * @example `e8bxxxxxxxxxxxxxxxx23`
     */
    "workitemId": string;
}
