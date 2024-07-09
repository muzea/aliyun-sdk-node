export interface ListSprintsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 项目唯一标识，同projectId
     * @example `e8bxxxxxxxxxxxxxxxx23`
     */
    "spaceIdentifier": string;
    /**
     * 类型，这里就写Project
     * @example `Project`
     */
    "spaceType": string;
    /**
     * 第一页值不需要填写，后面每一页的值需要从前一次调用结果中获取到此字段，然后获取后面的分页数据
     * @example `""`
     */
    "nextToken"?: string;
    /**
     * 每页最大返回数量，0-200，默认值20
     * @example `20`
     */
    "maxResults"?: number;
}
