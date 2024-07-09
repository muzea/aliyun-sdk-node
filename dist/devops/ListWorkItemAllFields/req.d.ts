export interface ListWorkItemAllFieldsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 资源类型
     * @example `Project`
     */
    "spaceType": string;
    /**
     * 项目唯一标识id，同projectId，项目唯一标识
     * @example `e8bxxxxxxxxxxxxxxxx23`
     */
    "spaceIdentifier": string;
    /**
     * 工作项类型id，工作项类型的列表和ID可以从ListProjectWorkitemTypes中获取
     * @example `dfexxxxxf4fee18xxxxx36`
     */
    "workitemTypeIdentifier": string;
}
