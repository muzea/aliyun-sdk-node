export interface GetWorkitemFileRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60811b5eed6e867404f6xxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，唯一标识
     * @example `11234455454355`
     */
    "workitemIdentifier": string;
    /**
     * 文件唯一标识
     * @example `dfsdfdsgdsfdsfff`
     */
    "fileIdentifier": string;
}
