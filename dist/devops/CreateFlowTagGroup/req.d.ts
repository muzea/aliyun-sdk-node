export interface CreateFlowTagGroupRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 标签分类名称，不能重复，最多20个字符
     * @example `标签分类名称`
     */
    "name": string;
}
