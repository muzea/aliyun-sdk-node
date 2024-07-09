export interface ListRepositoryWebhookRequest {
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `0cf2c8458ac44d9481aab2dd6ec10596v3
    `
     */
    "accessToken"?: string;
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5fbe3118672533690be72b12`
     */
    "organizationId": string;
    /**
     * 代码库ID
     * @example `2825387`
     */
    "repositoryId": number;
    /**
     * 页码
     * 默认值为1，从第1页开始。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小
     * 默认值为20，取值范围【1,100】
     * @example `10`
     */
    "pageSize"?: number;
}
