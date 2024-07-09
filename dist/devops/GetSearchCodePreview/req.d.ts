export interface GetSearchCodePreviewRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `627475075b46541dd2ff01bc`
     */
    "organizationId": string;
    /**
     * 文档ID
     * @example `60d54f3daccf2bbd6659f3ad/gitlabhq/master/config/environments/test.rb`
     */
    "docId": string;
    /**
     * 搜索关键字
     * @example `test`
     */
    "keyword": string;
    /**
     * 是否是DSL搜索
     * @example `false`
     */
    "isDsl"?: boolean;
}
